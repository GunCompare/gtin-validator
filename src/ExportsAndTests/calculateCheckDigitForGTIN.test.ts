import { calculateCheckDigitForGTIN } from "./calculateCheckDigitForGTIN"
import { errorsList } from "./errorsList"

test.each([
  ["72251003500", "5"],
  ["71088235062", "8"],
  ["0061414145324", "5"],
  ["07800005340", "1"],
  ["0001234567890", "5"],
  ["590123412345", "7"],
  ["00001234123", "8"],
  ["000001234123", "8"],
  ["0000001234123", "8"],
  ["1234123", "8"],
])("calculateCheckDigitForGTIN valid tests", (productCode, checkDigit) => {
  expect(calculateCheckDigitForGTIN(productCode)).toBe(checkDigit)
})

test.each([
  ["", errorsList.emptyString],
  ["1", errorsList.invalidStringLengthForCalculateCheckDigitForGTIN],
  ["12", errorsList.invalidStringLengthForCalculateCheckDigitForGTIN],
  ["123", errorsList.invalidStringLengthForCalculateCheckDigitForGTIN],
  ["1234", errorsList.invalidStringLengthForCalculateCheckDigitForGTIN],
  ["12345", errorsList.invalidStringLengthForCalculateCheckDigitForGTIN],
  ["123456", errorsList.invalidStringLengthForCalculateCheckDigitForGTIN],
  ["12345678", errorsList.invalidStringLengthForCalculateCheckDigitForGTIN],
  ["123456789", errorsList.invalidStringLengthForCalculateCheckDigitForGTIN],
  ["1234567890", errorsList.invalidStringLengthForCalculateCheckDigitForGTIN],
  ["12345678901234", errorsList.invalidStringLengthForCalculateCheckDigitForGTIN],
  ["12345679012345", errorsList.invalidStringLengthForCalculateCheckDigitForGTIN],
  [1234567, errorsList.notString],
  [12345678901, errorsList.notString],
  [123456789012, errorsList.notString],
  [1234567890123, errorsList.notString],
])("calculateCheckDigitForGTIN invalid tests", (productCode, error) => {
  // @ts-ignore
  expect(() => calculateCheckDigitForGTIN(productCode)).toThrowError(error)
})
