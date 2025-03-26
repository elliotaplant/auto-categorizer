import { EXAMPLE_EMAIL_2 } from "../test/example-email-2.js";

// Dynamically import the example email from your test file
async function main() {
  try {
    const emailContent = EXAMPLE_EMAIL_2;
    // Send the email to your API endpoint
    console.log("Sending request to API...");
    const response = await fetch(
      "https://auto-categorizer.elliotplant.workers.dev/api/register-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: emailContent,
      }
    );

    // Log the response
    const responseText = await response.text();
    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${responseText}`);

    // After success, retrieve and display all orders
    console.log("\nFetching current orders from database...");
    const ordersResponse = await fetch(
      "https://auto-categorizer.elliotplant.workers.dev/api/orders"
    );
    const ordersData = await ordersResponse.json();
    console.log("Current Orders in Database:");
    console.log(JSON.stringify(ordersData, null, 2));
  } catch (error) {
    console.error(error);
  }
}

main().catch(console.error);
