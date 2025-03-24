import { describe, it, expect, vi } from "vitest";
import { extractOrderDetails, registerOrder } from "../src/registerOrder";
import { EXAMPLE_EMAIL } from "./example-email";

describe("Order processing functionality", () => {
  describe("extractOrderDetails", () => {
    it("correctly extracts details from a simple email", () => {
      // Create a simple email content for testing
      const emailContent = `
From: amazon-orders@amazon.com
Subject: Your Amazon.com order has shipped

Hello,

Your order for "Amazon Basics Stapler" has shipped.

Order #123-4567890-1234567
Price: 12.99 USD

Thank you for shopping with Amazon!
      `;

      // Call extractOrderDetails directly
      const details = extractOrderDetails(emailContent);

      // Verify the extracted details
      expect(details.productName).toBe("Amazon Basics Stapler");
      expect(details.price).toBe(12.99);
      expect(details.orderId).toBe("123-4567890-1234567");
    });

    it("extracts details from the example email", () => {
      // Call extractOrderDetails directly with the example email
      const details = extractOrderDetails(EXAMPLE_EMAIL);

      // Verify extraction was successful
      expect(details.productName).toBe(
        "Amazon Basics Stapler with 1000 Staples, Office Stapler, 25 Sheet Capacity, Non-Slip, Black"
      );
      expect(details.price).toEqual(676);
    });
  });

  describe("registerOrder", () => {
    it("processes a valid email order", async () => {
      // Create a simple email content for testing
      const emailContent = `
From: amazon-orders@amazon.com
Subject: Your Amazon.com order has shipped

Hello,

Your order for "Amazon Basics Stapler" has shipped.

Order #123-4567890-1234567
Price: 12.99 USD

Thank you for shopping with Amazon!
      `;

      // Call the registerOrder function with our test email
      const response = await registerOrder(emailContent);

      // Verify the response is correct
      expect(response.status).toBe(200);
      expect(await response.text()).toBe("Order processed successfully");
    });
  });
});
