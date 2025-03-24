// Function to extract order details from email
export function extractOrderDetails(emailText) {
  // Extract product name - look for patterns including:
  // - Text in quotes (e.g., "Amazon Basics Stapler")
  // - Text after "Ordered:" in the subject line
  // - Text after "Item:" or similar product identifiers
  const productNamePatterns = [
    /(\".*?\")/,                                 // Text in quotes
    /Subject:.*?Ordered:\s*(\".*?\")/i,          // Ordered: "Product" in subject
    /Item:\s*(.*?)(?:\n|$)/i,                    // Item: Product
    /Ordered:\s*(.*?)(?:\n|$)/i,                 // Ordered: Product
    /for\s+\"(.*?)\".*?has shipped/i,            // "Your order for "X" has shipped" pattern
  ];
  
  let productName = "Unknown Product";
  
  // Try each pattern until we find a match
  for (const pattern of productNamePatterns) {
    const match = emailText.match(pattern);
    if (match && match[1]) {
      // Clean up the product name (remove quotes, asterisks, etc.)
      productName = match[1].replace(/[\"\'*]/g, "").trim();
      if (productName && productName !== "") break;
    }
  }

  // Extract price - look for dollar amounts
  const priceRegex = /(\d+\.\d{2})\s*USD/;
  const priceMatch = emailText.match(priceRegex);
  let price = 0;

  if (priceMatch) {
    price = parseFloat(priceMatch[1]);
  }

  // Extract order ID - format like 123-4567890-1234567
  const orderIdRegex = /Order\s+#?\s*(\d+-\d+-\d+)/i;
  const orderIdMatch = emailText.match(orderIdRegex);
  let orderId = "unknown-order-id";

  if (orderIdMatch) {
    orderId = orderIdMatch[1];
  }

  // Extract order date (using email date, not ideal but workable for demo)
  const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  return {
    productName,
    price,
    orderId,
    date,
  };
}

export async function registerOrder(emailText) {
  try {
    // Extract order details
    const orderDetails = extractOrderDetails(emailText);

    console.log("Extracted order details:");
    console.log("- Product:", orderDetails.productName);
    console.log("- Price:", orderDetails.price);
    console.log("- Order ID:", orderDetails.orderId);
    console.log("- Date:", orderDetails.date);

    // Validate extracted data
    if (
      orderDetails.price <= 0 ||
      orderDetails.productName === "Unknown Product"
    ) {
      console.log("Could not extract valid order details, ignoring");
      return new Response("Invalid order details", { status: 200 });
    }

    // In production, store in D1 database
    // Example D1 query if we were using D1:
    /*
    await env.DB.prepare(
      "INSERT INTO amazon_orders (product_name, price, order_id, date, used) VALUES (?, ?, ?, ?, ?)"
    )
      .bind(
        orderDetails.productName,
        orderDetails.price,
        orderDetails.orderId,
        orderDetails.date,
        0  // not used yet
      )
      .run();
    */

    // For now, just log that we would store it
    console.log("Order registered successfully");

    return new Response("Order processed successfully", { status: 200 });
  } catch (error) {
    console.error("Error processing email:", error);
    return new Response("Error processing email: " + error.message, {
      status: 500,
    });
  }
}
