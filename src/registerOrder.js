// Function to extract order details from email
export function extractOrderDetails(emailText) {
  // first, join all the lines of the email. Remove all =\n.
  const joinedEmail = emailText.split("=\n").join("\n").split("\n").join(" ")

  // Product name occurs in the first [image: (.+)] group
  const productName = joinedEmail.match(/\[image: (.+?)\]/)?.[1];
  if (!productName) {
    throw new Error("Could not find product name");
  }

  // Price appears in dollars
  const price = joinedEmail.match(/Total \$([\d\.]+)/)?.[1]
  if (!price) {
    throw new Error("Could not find price");
  }
  const priceCents = price * 100;

  // Extract order ID - format like 123-4567890-1234567
  const orderId = joinedEmail.match(/Order # =E2=80=AB([\w\d-]+)/)?.[1]
  if (!orderId) {
    throw new Error("Could not find order id");
  }

  return {
    productName,
    price, // Keep original price for display
    priceCents, // Price in cents for storage and comparison
    orderId
  };
}

export async function registerOrder(emailText, env) {
  try {
    // Extract order details
    const orderDetails = extractOrderDetails(emailText);

    console.log("Extracted order details:");
    console.log("- Product:", orderDetails.productName);
    console.log("- Price:", orderDetails.price);
    console.log("- Order ID:", orderDetails.orderId);

    // Store in D1 database if env is provided (production)
      try {
        const result = await env.DB.prepare(
          "INSERT INTO amazon_orders (product_name, price_cents, order_id, used) VALUES (?, ?, ?, ?)"
        )
          .bind(
            orderDetails.productName,
            orderDetails.priceCents,
            orderDetails.orderId,
            0 // not used yet
          )
          .run();

        console.log("Order stored in database, ID:", result.meta.last_row_id);
      } catch (dbError) {
        // Handle database errors separately
        if (
          dbError.message &&
          dbError.message.includes("UNIQUE constraint failed")
        ) {
          console.log(
            `Order ${orderDetails.orderId} already exists in database, skipping`
          );
        } else {
          console.error("Database error:", dbError);
          throw dbError; // Re-throw to be caught by the outer catch
        }
      }

    console.log("Order registered successfully");
    return new Response("Order processed successfully", { status: 200 });
  } catch (error) {
    console.error("Error processing email:", error);
    return new Response("Error processing email: " + error.message, {
      status: 500,
    });
  }
}
