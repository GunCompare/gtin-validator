import { isValidCheckDigitOnGTIN } from "./ExportsAndTests/isValidCheckDigitOnGTIN"
import { isValidStringLengthForGTIN } from "./ExportsAndTests/isValidStringLengthForGTIN"
import { removeGTINLeadingZerosToUpcOrGTIN13 } from "./ExportsAndTests/removeGTINLeadingZerosToUpcOrGTIN13"
import { isValidGTIN } from "./ExportsAndTests/isValidGTIN"
import { getFormatOfGTIN } from "./ExportsAndTests/getFormatOfGTIN"
import { getFormatOfMinifiedGTIN } from "./ExportsAndTests/getFormatOfMinifiedGTIN"
import { calculateCheckDigitForGTIN } from "./ExportsAndTests/calculateCheckDigitForGTIN"
import { generateRandomGTIN } from "./ExportsAndTests/generateRandomGTIN"
import { generateArrayOfRandomGTINs } from "./ExportsAndTests/generateArrayOfRandomGTINs"

export {
  isValidGTIN,
  isValidCheckDigitOnGTIN,
  isValidStringLengthForGTIN,
  removeGTINLeadingZerosToUpcOrGTIN13,
  getFormatOfGTIN,
  getFormatOfMinifiedGTIN,
  calculateCheckDigitForGTIN,
  generateRandomGTIN,
  generateArrayOfRandomGTINs,
}
