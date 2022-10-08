import { errorsList } from "./errorsList"
import { isStringOfDigits } from "./helpersFunctions"

/**
 * @description Determines whether productCode (including check digit) is a valid length for a GTIN.
 * @example isValidStringLengthForGTIN("45664") //returns false
 *  isValidStringLengthForGTIN("45664", "boolean") //returns false
 * isValidStringLengthForGTIN("45664", "error") //throws error `Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits.`
 * isValidStringLengthForGTIN("078000053401") //returns true
 * isValidStringLengthForGTIN("078000053401", "boolean") //returns true
 * isValidStringLengthForGTIN("078000053401", "error") //returns true
 * @author @DoUWant2DevApp
 * @param productCode
 * @param [returnBooleanOrThrowError] default = 'boolean'
 * @returns true if productCode is a string of digits with a length of  8, 12, 13, or 14
 */

export function isValidStringLengthForGTIN(
  productCode: string,
  returnBooleanOrThrowError: "boolean" | "error" = "boolean",
) {
  if (!isStringOfDigits(productCode, returnBooleanOrThrowError)) return false

  if (/^(\d{12,14}|\d{8})$/.test(productCode)) return true

  if (returnBooleanOrThrowError === "error") {
    throw new Error(errorsList.invalidStringLengthForGTIN)
  }
  return false
}
