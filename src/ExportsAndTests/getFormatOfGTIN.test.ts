import { errorsList } from "./errorsList"
import { getFormatOfGTIN } from "./getFormatOfGTIN"

test.each([
  ["722510035005", "GTIN-12"],
  ["710882350628", "GTIN-12"],
  ["00614141453245", "GTIN-14"],
  ["00012345678905", "GTIN-14"],
  ["5901234123457", "GTIN-13"],
  ["0000012341238", "GTIN-13"],
  ["12341238", "GTIN-8"],
])("getFormatOfGTIN valid tests", (productCode, expectedResult) => {
  expect(getFormatOfGTIN(productCode)).toBe(expectedResult)
})

test.each([
  [null, errorsList.notString],
  [84658555, errorsList.notString],
  ["", errorsList.emptyString],
  ["6", errorsList.invalidStringLengthForGTIN],
  ["86", errorsList.invalidStringLengthForGTIN],
  ["846", errorsList.invalidStringLengthForGTIN],
  ["8466", errorsList.invalidStringLengthForGTIN],
  ["84656", errorsList.invalidStringLengthForGTIN],
  ["846546", errorsList.invalidStringLengthForGTIN],
  ["8465456", errorsList.invalidStringLengthForGTIN],
  ["846548556", errorsList.invalidStringLengthForGTIN],
  ["8465485568", errorsList.invalidStringLengthForGTIN],
  ["84654855681", errorsList.invalidStringLengthForGTIN],
  ["846548556815868", errorsList.invalidStringLengthForGTIN],
  ["00614131453245", errorsList.invalidCheckDigit],
  ["792510035005", errorsList.invalidCheckDigit],
  ["710882350626", errorsList.invalidCheckDigit],
  ["12341239", errorsList.invalidCheckDigit],
  ["01012345678905", errorsList.invalidCheckDigit],
  ["5901230123457", errorsList.invalidCheckDigit],
  //   @ts-ignore
])("getFormatOfGTIN invalid tests", (productCode, expectedError) => {
  expect(() => {
    //@ts-ignore
    getFormatOfGTIN(productCode)
    //@ts-ignore
  }).toThrowError(expectedError)
})
