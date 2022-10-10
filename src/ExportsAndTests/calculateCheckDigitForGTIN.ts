import { errorsList } from "./errorsList"
import { isString } from "./helpersFunctions"

/**
 * @description Calculates check digit for GTIN strings of digits 7 or 11-13 characters long.
 * @param productCodeWithoutCheckDigit gtin without check digit. Only strings of digits 7 or 11-13 characters long are valid.
 * @example calculateCheckDigitForGTIN("72251003500") //returns "5"
 * calculateCheckDigitForGTIN("590123412345") //returns "7"
 * calculateCheckDigitForGTIN("1234123") //returns "8"
 * calculateCheckDigitForGTIN("00001234123") //returns "8"
 * calculateCheckDigitForGTIN("000001234123") //returns "8"
 * calculateCheckDigitForGTIN("0000001234123") //returns "8"
 * calculateCheckDigitForGTIN("") //throws Error: "Invalid GTIN: The provided productCode is an empty string."
 * calculateCheckDigitForGTIN("123456") //throws Error: "Invalid length for the provided productCodeWithoutCheckDigit param..."
 * calculateCheckDigitForGTIN("12345678") //throws Error: "Invalid length for the provided productCodeWithoutCheckDigit param..."
 * calculateCheckDigitForGTIN("1234567890") //throws Error: "Invalid length for the provided productCodeWithoutCheckDigit param..."
 * calculateCheckDigitForGTIN("12345678901234") //throws Error: "Invalid length for the provided productCodeWithoutCheckDigit param..."
 * calculateCheckDigitForGTIN(1234567) //throws Error: "Invalid GTIN: The provided productCode is not of type string."
 * calculateCheckDigitForGTIN(123456789012) //throws Error: "Invalid GTIN: The provided productCode is not of type string."
 * @returns check digit string
 */
export function calculateCheckDigitForGTIN(productCodeWithoutCheckDigit: string) {
  isString(productCodeWithoutCheckDigit, "error")
  if (/^(\d{11,13}|\d{7})$/.test(productCodeWithoutCheckDigit)) {
    let checkSum = 0
    const digitArr = productCodeWithoutCheckDigit.split("").reverse()
    digitArr.map((digit, n) => {
      if ((n + 1) % 2 === 0) {
        checkSum += Number(digit)
      } else {
        checkSum += Number(digit) * 3
      }
    })
    const calculatedCheckDigit = (10 - (checkSum % 10)) % 10
    return calculatedCheckDigit.toString()
  } else {
    throw new Error(errorsList.invalidStringLengthForCalculateCheckDigitForGTIN)
  }
}
