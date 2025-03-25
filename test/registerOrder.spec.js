import { describe, it, expect, vi } from "vitest";
import { extractOrderDetails, registerOrder } from "../src/registerOrder";
import { EXAMPLE_EMAIL } from "./example-email";

describe("Order processing functionality", () => {
  describe("extractOrderDetails", () => {
    it("extracts details from the example email", () => {
      // Call extractOrderDetails directly with the example email
      const details = extractOrderDetails(EXAMPLE_EMAIL);

      // Verify extraction was successful
      expect(details.productName).toBe(
        "Amazon Basics Stapler with 1000 Staples, Office Stapler, 25 Sheet"
      );
      expect(details.priceCents).toEqual(676);
      expect(details.orderId).toBe("113-9615736-3549843");
    });
  });
});
