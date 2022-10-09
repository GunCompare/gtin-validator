import { errorsList } from "./errorsList"
import { getFormatOfMinifiedGTIN } from "./getFormatOfMinifiedGTIN"

test.each([
  ["722510035005", "GTIN-12"],
  ["0722510035005", "GTIN-12"],
  ["5901234123457", "GTIN-13"],
  ["05901234123457", "GTIN-13"],
  ["50004544639356", "GTIN-14"],
  ["00614141453245", "GTIN-12"],
  ["12341238", "GTIN-8"],
])("getFormatOfMinifiedGTIN valid tests", (productCode, expectedResult) => {
  expect(getFormatOfMinifiedGTIN(productCode)).toBe(expectedResult)
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
])("getFormatOfMinifiedGTIN invalid tests", (productCode, expectedError) => {
  expect(() => {
    //@ts-ignore
    getFormatOfMinifiedGTIN(productCode)
    //@ts-ignore
  }).toThrowError(expectedError)
})
