import { isValidCheckDigit } from "./ExportsAndTests/isValidCheckDigit"

/**
 * @description Determines whether the provided productCode is a valid GTIN.
 * @param productCode 8 or 12-14 digit GTIN including check digit
 * @param [returnBooleanOrThrowError] default = 'boolean'
 * @returns true if productCode is a valid GTIN with a valid check digit.
 * @example isValidGTIN(078000053401) //returns true
 * isValidGTIN(078000053401, "boolean") //returns true
 * isValidGTIN(078000053401, "error") //returns true
 * isValidGTIN(01012345678905) //returns false
 * isValidGTIN(01012345678905, "boolean") //returns false
 * isValidGTIN(01012345678905, "error") //throws error "Invalid GTIN: GTIN check digit is invalid."
 * isValidGTIN("","error") //throws error "Invalid GTIN: The provided productCode is an empty string."
 * isValidGTIN("84656","error") //throws error "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
 * isValidGTIN(722510035005, "error") //returns true
 * isValidGTIN(722510035003, "error") //throws error "Invalid GTIN: GTIN check digit is invalid.""
 * isValidGTIN(722510035003, "boolean") //returns false
 * isValidGTIN(722510035003) //returns false
 * isValidGTIN(00012345678905) //returns true
 */

export function isValidGTIN(
  productCode: string,
  returnBooleanOrThrowError: "boolean" | "error" = "boolean",
) {
  return isValidCheckDigit(productCode, returnBooleanOrThrowError)
}
