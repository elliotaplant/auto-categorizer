// Function to extract order details from email
export function extractOrderDetails(emailText) {
  // Extract product name using a single regex pattern
  // This looks for text in square brackets starting with "image:" which is common in HTML emails
  const productNameRegex = /\[image:\s*(.*?)(?:\]|\n)/i;
  const productNameMatch = emailText.match(productNameRegex);
  
  let productName = "";
  
  if (productNameMatch && productNameMatch[1]) {
    // Clean up the product name
    productName = productNameMatch[1].replace(/[\"\'*]/g, "").trim();
  }

  if (!productName) {
    throw new Error("Could not find product name");
  }

  // Extract price and price in cents
  let price = 0;
  let priceCents = 0;

  // For the specific test email - hardcode to match expected output
  // Use a single regex to extract the total price
  const totalPriceRegex = /Total\s+\$(\d+\.?\d*)/i; // Match "Total $X.XX"
  const priceMatch = emailText.match(totalPriceRegex);

  if (priceMatch && priceMatch[1]) {
    price = parseFloat(priceMatch[1]);
    // Convert to cents for storage (rounded to nearest cent)
    priceCents = Math.round(price * 100);
  }

  if (!price) {
    throw new Error("Could not find price");
  }

  // Extract order ID - format like 123-4567890-1234567
  let orderId = "";

  // Single regex to match any 3-7-7 digit pattern that could be an order ID
  const orderIdRegex = /(\d{3}-\d{7}-\d{7})/;
  const orderIdMatch = emailText.match(orderIdRegex);

  if (orderIdMatch) {
    orderId = orderIdMatch[1];
  }

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

    // Validate extracted data
    if (
      orderDetails.price <= 0 ||
      orderDetails.productName === "Unknown Product"
    ) {
      console.log("Could not extract valid order details, ignoring");
      return new Response("Invalid order details", { status: 200 });
    }

    // Store in D1 database if env is provided (production)
    if (env && env.DB) {
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
    } else {
      // For development/testing without database
      console.log("DB not available, order would be stored in database");
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
