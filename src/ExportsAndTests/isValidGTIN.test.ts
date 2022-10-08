import { errorsList } from "./errorsList"
import { isValidGTIN } from "../isValidGTIN"

test.each([
  "722510035005",
  "710882350628",
  "00614141453245",
  "078000053401",
  "00012345678905",
  "5901234123457",
  "000012341238",
  "0000012341238",
  "00000012341238",
])("isValidGTIN valid tests", (productCode) => {
  expect(isValidGTIN(productCode)).toBe(true)
})
test.each([
  ["", errorsList.emptyString],
  ["6", errorsList.invalidStringLengthForGTIN],
  ["86", errorsList.invalidStringLengthForGTIN],
  ["84656", errorsList.invalidStringLengthForGTIN],
  ["846546", errorsList.invalidStringLengthForGTIN],
  ["84654855681", errorsList.invalidStringLengthForGTIN],
  ["846548556815868", errorsList.invalidStringLengthForGTIN],
  ["078000053404", errorsList.invalidCheckDigit],
  ["00614131453245", errorsList.invalidCheckDigit],
  ["792510035005", errorsList.invalidCheckDigit],
  ["710882350626", errorsList.invalidCheckDigit],
  ["01012345678905", errorsList.invalidCheckDigit],
  ["5901230123457", errorsList.invalidCheckDigit],
])("isValidGTIN invalid tests", (productCode, expectedError) => {
  expect(() => {
    isValidGTIN(productCode, "error")
  }).toThrowError(expectedError)
  expect(isValidGTIN(productCode)).toBe(false)
  expect(isValidGTIN(productCode, "boolean")).toBe(false)
})
