import { errorsList } from "./errorsList"
import { isValidCheckDigit } from "./isValidCheckDigit"

/**
 * @description Removes leading zeros in 13-14 digit productCode to return a GTIN-12/UPC or GTIN-13. Throws Error on invalid provided productCode.
 * @param productCode Valid 12-14 digit GTIN string including valid check digit
 * @example
 * removeGTINLeadingZerosToUpcOrGTIN13("00000012341238") //returns "000012341238"
 * removeGTINLeadingZerosToUpcOrGTIN13("0000012341238") //returns "000012341238"
 * removeGTINLeadingZerosToUpcOrGTIN13("000012341238") //returns "000012341238"
 * removeGTINLeadingZerosToUpcOrGTIN13("00614141453245") // returns "614141453245"
 * removeGTINLeadingZerosToUpcOrGTIN13("00012345678905") //returns "012345678905"
 * removeGTINLeadingZerosToUpcOrGTIN13("01234123412344") //returns "1234123412344"
 * removeGTINLeadingZerosToUpcOrGTIN13("078000053401") //returns "078000053401"
 * removeGTINLeadingZerosToUpcOrGTIN13("722510035005") //returns "722510035005"
 * removeGTINLeadingZerosToUpcOrGTIN13("710882350628") //returns "710882350628"
 * removeGTINLeadingZerosToUpcOrGTIN13("5901234123457") //returns "5901234123457"
 * removeGTINLeadingZerosToUpcOrGTIN13("792510035005") //throws error "Invalid GTIN: GTIN check digit is invalid."
 * removeGTINLeadingZerosToUpcOrGTIN13("") //throws error "Invalid GTIN: The provided productCode is an empty string."
 * removeGTINLeadingZerosToUpcOrGTIN13("84658555") //throws error "Invalid GTIN: The provided productCode is not of type string"
 * removeGTINLeadingZerosToUpcOrGTIN13(null) //throws error "Invalid GTIN: The provided productCode is not of type string"
 * removeGTINLeadingZerosToUpcOrGTIN13("84656") //throws error "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
 * removeGTINLeadingZerosToUpcOrGTIN13("84645456") //throws error "Invalid productCode provided to removeGTINLeadingZerosToUpcOrGTIN13: Only valid GTINs between 12-14 digits are accepted."
 */
export function removeGTINLeadingZerosToUpcOrGTIN13(productCode: string) {
  isValidCheckDigit(productCode, "error")
  if (/^(\d{12,14})$/.test(productCode)) {
    switch (productCode.length) {
      case 14:
        return productCode.replace(/^0{1,2}/, "")
      case 13:
        return productCode.replace(/^0{1}/, "")
      case 12:
        return productCode
    }
    throw Error(errorsList.unknownRemoveGTINLeadingZerosToUpcOrGTIN13)
  } else {
    throw new Error(errorsList.invalidStringLengthForRemoveGTINLeadingZerosToUpcOrGTIN13)
  }
}
