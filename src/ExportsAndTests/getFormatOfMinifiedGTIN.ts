import { isValidGTIN } from "./isValidGTIN"
import { removeGTINLeadingZerosToUpcOrGTIN13 } from "./removeGTINLeadingZerosToUpcOrGTIN13"

/**
 * @description Returns the GTIN format ("GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14") of the provided productCode after removing its unnecessary leading zeros. Throws an error on an invalid GTIN.
 * @param productCode Valid GTIN-8, GTIN-12, GTIN-13, or GTIN-14
 * @returns "GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14"
 * @example getFormatOfMinifiedGTIN("722510035005") // returns "GTIN-12"
 * getFormatOfMinifiedGTIN("0722510035005") // returns "GTIN-12"
 * getFormatOfMinifiedGTIN("5901234123457") // returns "GTIN-13"
 * getFormatOfMinifiedGTIN("05901234123457") // returns "GTIN-13"
 * getFormatOfMinifiedGTIN("50004544639356") // returns "GTIN-14"
 * getFormatOfMinifiedGTIN("00614141453245") // returns "GTIN-12"
 * getFormatOfMinifiedGTIN("12341238") // returns "GTIN-8"
 * getFormatOfGTIN("84656") //throws error: "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
 * getFormatOfGTIN("846548556815868") //throws error: "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
 * getFormatOfGTIN(84658555) //throws error: "Invalid GTIN: The provided productCode is not of type string."
 */
export function getFormatOfMinifiedGTIN(productCode: string) {
  isValidGTIN(productCode, "error")
  productCode =
    productCode.length >= 12
      ? removeGTINLeadingZerosToUpcOrGTIN13(productCode)
      : productCode
  return `GTIN-${productCode.length}`
}
