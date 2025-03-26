import { describe, it, expect, vi } from "vitest";
import { extractOrderDetails, registerOrder } from "../src/registerOrder";
import { EXAMPLE_EMAIL } from "./example-email";
import { EXAMPLE_EMAIL_2 } from "./example-email-2.js";

describe("Order processing functionality", () => {
  describe("extractOrderDetails", () => {
    it("extracts details from the example email", () => {
      // Call extractOrderDetails directly with the example email
      const details = extractOrderDetails(EXAMPLE_EMAIL);

      // Verify extraction was successful
      expect(details.productName).toBe(
        "Amazon Basics Stapler with 1000 Staples, Office Stapler, 25 Sheet Capacity, Non-Slip, Black"
      );
      expect(details.priceCents).toEqual(676);
      expect(details.orderId).toBe("113-9615736-3549843");
    });
    
    it("extracts details from the example email2", () => {
      // Call extractOrderDetails directly with the example email
      const details = extractOrderDetails(EXAMPLE_EMAIL_2);

      // Verify extraction was successful
      expect(details.productName).toBe(
        "BLACK+DECKER 2.5 Cu. Ft. Compact Refrigerator, ENERGY STAR Certified Small Refrigerator, Single Door Mini Fridge with Freezer, Personal Fridge for Home/Dorm Room, R600a Refrigerant, VCM Stainless Look"
      );
      expect(details.priceCents).toEqual(20946);
      expect(details.orderId).toBe("113-7730110-9707458");
    });
  });
});
