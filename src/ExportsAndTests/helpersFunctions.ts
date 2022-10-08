import { errorsList } from "./errorsList"

/**
 * @description Determines whether productCode param is of type string && not an empty string
 * @param productCode
 * @param [returnBooleanOrThrowError] default = 'boolean'
 * @returns true if string && non empty string
 *  */
export function isString(
  productCode: any,
  returnBooleanOrThrowError: "boolean" | "error" = "boolean",
): boolean {
  if (productCode === "") {
    if (returnBooleanOrThrowError === "error") throw new Error(errorsList.emptyString)
    return false
  }
  if (typeof productCode !== "string") {
    if (returnBooleanOrThrowError === "error") throw new Error(errorsList.notString)
    return false
  } else return true
}

/**
 * @description Determines whether productCode is a string of digits.
 * @param productCode
 * @param [returnBooleanOrThrowError]
 * @returns true if valid string of digits
 */
export function isStringOfDigits(
  productCode: string,
  returnBooleanOrThrowError: "boolean" | "error" = "boolean",
) {
  if (isString(productCode, returnBooleanOrThrowError)) {
    if (/^\d+$/.test(productCode)) {
      return true
    }
    if (returnBooleanOrThrowError === "error") {
      throw new Error(errorsList.stringContainsNonDigitCharacters)
    }
    return false
  }
  return false
}
