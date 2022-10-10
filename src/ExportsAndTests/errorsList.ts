/**
 * @description Error messages to be used throughout project.
 */
export const errorsList: {
  emptyString: "Invalid GTIN: The provided productCode is an empty string."
  notString: `Invalid GTIN: The provided productCode is not of type string.`
  stringContainsNonDigitCharacters: "Invalid GTIN: The provided productCode contains non digit characters."
  invalidStringLengthForGTIN: `Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits.`
  invalidStringLengthForRemoveGTINLeadingZerosToUpcOrGTIN13: `Invalid productCode provided to removeGTINLeadingZerosToUpcOrGTIN13: Only valid GTINs between 12-14 digits are accepted.`
  invalidCheckDigit: `Invalid GTIN: GTIN check digit is invalid.`
  unknownRemoveGTINLeadingZerosToUpcOrGTIN13: "Unknown error attempting removeGTINLeadingZerosToUpcOrGTIN13 with the provided productCode."
  invalidStringLengthForCalculateCheckDigitForGTIN: "Invalid length for the provided productCodeWithoutCheckDigit param. The productCodeWithoutCheckDigit param should be a string of digits 7 or 11-13 characters long."
} = {
  emptyString: "Invalid GTIN: The provided productCode is an empty string.",
  notString: `Invalid GTIN: The provided productCode is not of type string.`,
  stringContainsNonDigitCharacters:
    "Invalid GTIN: The provided productCode contains non digit characters.",
  invalidStringLengthForGTIN: `Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits.`,
  invalidStringLengthForRemoveGTINLeadingZerosToUpcOrGTIN13: `Invalid productCode provided to removeGTINLeadingZerosToUpcOrGTIN13: Only valid GTINs between 12-14 digits are accepted.`,
  invalidCheckDigit: `Invalid GTIN: GTIN check digit is invalid.`,
  unknownRemoveGTINLeadingZerosToUpcOrGTIN13:
    "Unknown error attempting removeGTINLeadingZerosToUpcOrGTIN13 with the provided productCode.",
  invalidStringLengthForCalculateCheckDigitForGTIN:
    "Invalid length for the provided productCodeWithoutCheckDigit param. The productCodeWithoutCheckDigit param should be a string of digits 7 or 11-13 characters long.",
}
