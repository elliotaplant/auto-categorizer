// Script to update YNAB transaction memos with Amazon product names
import * as ynab from "ynab";

export function getYnab(env) {
  // Get the personal access token from env
  const token = env.YNAB_PERSONAL_ACCESS_TOKEN;
  const budgetId = env.BUDGET_ID;

  if (!token) {
    throw new Error("YNAB_PERSONAL_ACCESS_TOKEN is required in environment");
  }

  if (!budgetId) {
    throw new Error("BUDGET_ID is required in environment");
  }

  // Initialize YNAB API client
  return new ynab.API(token);
}

// Get unapproved transactions
async function getUnapprovedTransactions(ynabApi, budgetId) {
  try {
    const response = await ynabApi.transactions.getTransactions(
      budgetId,
      undefined,
      "unapproved"
    );
    return response.data.transactions;
  } catch (error) {
    console.error("Error fetching unapproved transactions:", error.message);
    throw error;
  }
}

// Find Amazon transactions without memos
function findAmazonTransactionsWithoutMemos(transactions) {
  return transactions.filter((txn) => {
    // Check if payee name includes "Amazon" (case insensitive)
    const isAmazon =
      txn.payee_name && txn.payee_name.toLowerCase().includes("amazon");
    // Check if memo is empty or null
    const noMemo = !txn.memo || txn.memo.trim() === "";
    return isAmazon && noMemo;
  });
}

// Update transaction memo
async function updateTransactionMemo(ynabApi, transactionId, memo, budgetId) {
  try {
    const txnResponse = await ynabApi.transactions.getTransactionById(
      budgetId,
      transactionId
    );
    const currentTxn = txnResponse.data.transaction;

    const transactionUpdate = {
      id: transactionId,
      memo,
      account_id: currentTxn.account_id,
      date: currentTxn.date,
      amount: currentTxn.amount,
      payee_id: currentTxn.payee_id,
      payee_name: currentTxn.payee_name,
      cleared: currentTxn.cleared,
      approved: currentTxn.approved,
    };

    const response = await ynabApi.transactions.updateTransaction(
      budgetId,
      transactionId,
      { transaction: transactionUpdate }
    );

    return response.data.transaction;
  } catch (error) {
    console.error(
      `Error updating transaction ${transactionId}:`,
      error.message
    );
    throw error;
  }
}

// Main function to process all unapproved Amazon transactions
export async function addMemos(ynabApi, env) {
  try {
    console.log("Starting to process unapproved Amazon transactions...");
    
    // Get the budget ID from env
    const budgetId = env.BUDGET_ID;
    if (!budgetId) {
      throw new Error("BUDGET_ID is required in environment");
    }

    // Get all unapproved transactions
    const transactions = await getUnapprovedTransactions(ynabApi, budgetId);
    console.log(`Found ${transactions.length} unapproved transactions total`);

    // Filter for Amazon transactions without memos
    const amazonTransactions = findAmazonTransactionsWithoutMemos(transactions);
    console.log(
      `Found ${amazonTransactions.length} unapproved Amazon transactions without memos`
    );

    // Process each Amazon transaction
    for (const txn of amazonTransactions) {
      // Convert milliunits to cents (absolute value for comparison)
      // YNAB stores amounts in milliunits (1/1000 of a currency unit)
      // e.g., $10.00 = 10000 milliunits
      const txnAmountCents = Math.round(Math.abs(txn.amount / 10));

      // For logging, convert cents to dollars
      const txnAmountDollars = txnAmountCents / 100;
      console.log(
        `Processing transaction: $${txnAmountDollars.toFixed(2)} on ${txn.date}`
      );

      // Find matching orders in the database by price in cents
      let matchingOrders = [];
      if (env && env.DB) {
        const result = await env.DB.prepare(
          "SELECT * FROM amazon_orders WHERE price_cents = ? AND used = 0"
        )
          .bind(txnAmountCents)
          .all();
        matchingOrders = result.results;
      }

      if (matchingOrders.length === 0) {
        console.log(
          `No matching Amazon orders found for $${txnAmountDollars.toFixed(2)}`
        );
        continue;
      }

      console.log(`Found ${matchingOrders.length} matching order(s)`);

      let newMemo = "";
      if (matchingOrders.length === 1) {
        // Exactly one match - use the product name
        newMemo = matchingOrders[0].productName;

        // Mark the order as used
        if (env && env.DB) {
          await env.DB.prepare("UPDATE amazon_orders SET used = 1 WHERE id = ?")
            .bind(matchingOrders[0].id)
            .run();
        }
      } else {
        // Multiple matches - list all product names
        newMemo = matchingOrders.map((order) => order.productName).join(" OR ");

        // Mark all orders as used
        if (env && env.DB) {
          for (const order of matchingOrders) {
            await env.DB.prepare(
              "UPDATE amazon_orders SET used = 1 WHERE id = ?"
            )
              .bind(order.id)
              .run();
          }
        }
      }

      // Update the transaction memo
      console.log(`Updating transaction memo to: "${newMemo}"`);
      await updateTransactionMemo(ynabApi, txn.id, newMemo, budgetId);
      console.log("Transaction updated successfully");
    }

    console.log("\nFinished processing all transactions");
  } catch (error) {
    console.error("Error in main process:", error.message);
    throw error;
  }
}
