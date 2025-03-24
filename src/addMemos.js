// Script to update YNAB transaction memos with Amazon product names
import { config } from "dotenv";
import * as ynab from "ynab";
config();

// Get the personal access token from env
const token = process.env.YNAB_PERSONAL_ACCESS_TOKEN;
const budgetId = process.env.BUDGET_ID;

if (!token) {
  console.error("YNAB_PERSONAL_ACCESS_TOKEN is required in .env file");
  process.exit(1);
}

if (!budgetId) {
  console.error("BUDGET_ID is required in .env file");
  process.exit(1);
}

// Initialize YNAB API client
const ynabAPI = new ynab.API(token);

// Get unapproved transactions
async function getUnapprovedTransactions() {
  try {
    const response = await ynabAPI.transactions.getTransactions(
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
async function updateTransactionMemo(transactionId, memo) {
  try {
    const txnResponse = await ynabAPI.transactions.getTransactionById(
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

    const response = await ynabAPI.transactions.updateTransaction(
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
export async function addMemos() {
  try {
    console.log("Starting to process unapproved Amazon transactions...");

    // Get all unapproved transactions
    const transactions = await getUnapprovedTransactions();
    console.log(`Found ${transactions.length} unapproved transactions total`);

    // Filter for Amazon transactions without memos
    const amazonTransactions = findAmazonTransactionsWithoutMemos(transactions);
    console.log(
      `Found ${amazonTransactions.length} unapproved Amazon transactions without memos`
    );

    // Process each Amazon transaction
    for (const txn of amazonTransactions) {
      // Convert milliunits to dollars (absolute value for comparison)
      const txnAmount = Math.abs(txn.amount / 1000);

      console.log(
        `Processing transaction: $${txnAmount.toFixed(2)} on ${txn.date}`
      );

      // Find matching orders in the database
      const matchingOrders = []; // TODO: load from DB

      if (matchingOrders.length === 0) {
        console.log(
          `No matching Amazon orders found for $${txnAmount.toFixed(2)}`
        );
        continue;
      }

      console.log(`Found ${matchingOrders.length} matching order(s)`);

      let newMemo = "";
      if (matchingOrders.length === 1) {
        // Exactly one match - use the product name
        newMemo = matchingOrders[0].productName;

        // Mark the order as used
        // TODO: implement
        await markOrderAsUsed(matchingOrders[0].id);
      } else {
        // Multiple matches - list all product names
        newMemo = matchingOrders.map((order) => order.productName).join(" OR ");

        // Mark all orders as used
        for (const order of matchingOrders) {
          await markOrderAsUsed(order.id);
        }
      }

      // Update the transaction memo
      console.log(`Updating transaction memo to: "${newMemo}"`);
      await updateTransactionMemo(txn.id, newMemo);
      console.log("Transaction updated successfully");
    }

    console.log("\nFinished processing all transactions");
  } catch (error) {
    console.error("Error in main process:", error.message);
    throw error;
  }
}
