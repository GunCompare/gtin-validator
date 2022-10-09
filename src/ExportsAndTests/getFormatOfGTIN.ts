import { isValidGTIN } from "./isValidGTIN"

/**
 * @description Returns the GTIN format ("GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14") of the provided productCode or throws an error on an invalid GTIN.
 * @param productCode Valid GTIN-8, GTIN-12, GTIN-13, or GTIN-14
 * @returns "GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14"
 * @example getFormatOfGTIN("722510035005") //returns "GTIN-12"
 * getFormatOfGTIN("5901234123457") //returns "GTIN-13"
 * getFormatOfGTIN("0000012341238") //returns "GTIN-13"
 * getFormatOfGTIN("00012345678905") //returns "GTIN-14"
 * getFormatOfGTIN("12341238") //returns "GTIN-8"
 * getFormatOfGTIN("84656") //throws error: "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
 * getFormatOfGTIN("846548556815868") //throws error: "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
 * getFormatOfGTIN(84658555) //throws error: "Invalid GTIN: The provided productCode is not of type string."
 */
export function getFormatOfGTIN(productCode: string) {
  isValidGTIN(productCode, "error")
  return `GTIN-${productCode.length}`
}
