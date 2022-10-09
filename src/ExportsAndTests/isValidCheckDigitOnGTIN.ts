import { errorsList } from "./errorsList"
import { isValidStringLengthForGTIN } from "./isValidStringLengthForGTIN"

/**
 * @description Determines whether the GTIN's check digit is valid.
 * @param productCode 8 or 12-14 digit GTIN including check digit
 * @param [returnBooleanOrThrowError] default = 'boolean'
 * @returns true if productCode is a valid GTIN with valid check digit.
 * @example isValidCheckDigitOnGTIN("078000053401") //returns true
 * isValidCheckDigitOnGTIN("078000053401", "boolean") //returns true
 * isValidCheckDigitOnGTIN("078000053401", "error") //returns true
 * isValidCheckDigitOnGTIN("01012345678905") //returns false
 * isValidCheckDigitOnGTIN("01012345678905", "boolean") //returns false
 * isValidCheckDigitOnGTIN("01012345678905", "error") //throws error "Invalid GTIN: GTIN check digit is invalid."
 * isValidCheckDigitOnGTIN("","error") //throws error "Invalid GTIN: The provided productCode is an empty string."
 * isValidCheckDigitOnGTIN("84656","error") //throws error "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
 * isValidCheckDigitOnGTIN("722510035005", "error") //returns true
 * isValidCheckDigitOnGTIN("722510035003", "error") //throws error "Invalid GTIN: GTIN check digit is invalid.""
 * isValidCheckDigitOnGTIN("722510035003", "boolean") //returns false
 * isValidCheckDigitOnGTIN("722510035003") //returns false
 * isValidCheckDigitOnGTIN("00012345678905") //returns true
 */

export function isValidCheckDigitOnGTIN(
  productCode: string,
  returnBooleanOrThrowError: "boolean" | "error" = "boolean",
) {
  if (!isValidStringLengthForGTIN(productCode, returnBooleanOrThrowError)) return false

  const checkDigit = productCode.split("").pop()
  productCode = productCode.slice(0, -1)

  let checkSum = 0

  const digitArr = productCode.split("").reverse()
  digitArr.map((digit, n) => {
    if ((n + 1) % 2 === 0) {
      checkSum += Number(digit)
    } else {
      checkSum += Number(digit) * 3
    }
  })

  const calculatedCheckDigit = (10 - (checkSum % 10)) % 10

  if (calculatedCheckDigit !== Number(checkDigit)) {
    if (returnBooleanOrThrowError === "error") {
      throw new Error(errorsList.invalidCheckDigit)
    }
    return false
  } else {
    return true
  }
}
