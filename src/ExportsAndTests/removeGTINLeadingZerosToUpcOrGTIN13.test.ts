import { errorsList } from "./errorsList"
import { removeGTINLeadingZerosToUpcOrGTIN13 } from "./removeGTINLeadingZerosToUpcOrGTIN13"

test.each([
  ["722510035005", "722510035005"],
  ["710882350628", "710882350628"],
  ["00614141453245", "614141453245"],
  ["078000053401", "078000053401"],
  ["00012345678905", "012345678905"],
  ["5901234123457", "5901234123457"],
  ["00000012341238", "000012341238"],
  ["0000012341238", "000012341238"],
  ["000012341238", "000012341238"],
  ["01234123412344", "1234123412344"],
])("removeGTINLeadingZerosToUpcOrGTIN13 valid tests", (productCode, expectedResult) => {
  expect(removeGTINLeadingZerosToUpcOrGTIN13(productCode)).toBe(expectedResult)
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
  ["84645456", errorsList.invalidStringLengthForRemoveGTINLeadingZerosToUpcOrGTIN13],
  ["846548556", errorsList.invalidStringLengthForGTIN],
  ["8465485568", errorsList.invalidStringLengthForGTIN],
  ["84654855681", errorsList.invalidStringLengthForGTIN],
  ["846548556815868", errorsList.invalidStringLengthForGTIN],
  ["00614131453245", errorsList.invalidCheckDigit],
  ["792510035005", errorsList.invalidCheckDigit],
  ["710882350626", errorsList.invalidCheckDigit],
  ["01012345678905", errorsList.invalidCheckDigit],
  ["5901230123457", errorsList.invalidCheckDigit],
  //   @ts-ignore
])("removeGTINLeadingZerosToUpcOrGTIN13 invalid tests", (productCode, expectedError) => {
  expect(() => {
    //@ts-ignore
    removeGTINLeadingZerosToUpcOrGTIN13(productCode)
    //@ts-ignore
  }).toThrowError(expectedError)
})
