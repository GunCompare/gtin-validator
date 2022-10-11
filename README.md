# gtin-validator

![npm](https://img.shields.io/npm/v/gtin-validator)
![build](https://github.com/GunCompare/gtin-validator/actions/workflows/node.js.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/GunCompare/gtin-validator/badge.svg)](https://coveralls.io/github/GunCompare/gtin-validator)
![NPM](https://img.shields.io/npm/l/gtin-validator)

gtin-validator allows you to validate and work with GTIN, UPC, and other product code formats.

```
npm i gtin-validator
```

```javascript
import {
  isValidGTIN,
  isValidCheckDigitOnGTIN,
  isValidStringLengthForGTIN,
  removeGTINLeadingZerosToUpcOrGTIN13,
  getFormatOfGTIN,
  getFormatOfMinifiedGTIN,
} from "gtin-validator"
```

## Examples

### isValidGTIN(productCode)

Returns true if the provided productCode is a valid GTIN (valid length and check digit). On invalid productCodes, returns false by default or throws an error if "error" is passed as the second parameter.

```javascript
import { isValidGTIN } from "gtin-validator"

isValidGTIN("078000053401") //returns true
isValidGTIN("078000053401", "boolean") //returns true
isValidGTIN("078000053401", "error") //returns true
isValidGTIN("01012345678905") //returns false
isValidGTIN("01012345678905", "boolean") //returns false
isValidGTIN("01012345678905", "error") //throws error "Invalid GTIN: GTIN check digit is invalid."
isValidGTIN("", "error") //throws error "Invalid GTIN: The provided productCode is an empty string."
isValidGTIN("84656", "error") //throws error "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
isValidGTIN("722510035005", "error") //returns true
isValidGTIN(722510035005) //returns false
isValidGTIN(722510035005, "error") //throws error "Invalid GTIN: The provided productCode is not of type string."
isValidGTIN("722510035003", "error") //throws error "Invalid GTIN: GTIN check digit is invalid.""
isValidGTIN("722510035003", "boolean") //returns false
isValidGTIN("722510035003") //returns false
isValidGTIN("00012345678905") //returns true
```

### isValidCheckDigitOnGTIN(productCode)

Returns true if the provided productCode is a valid GTIN and has a valid check digit. If the check digit is invalid, returns false by default or throws an error if "error" is passed as the second parameter.

```javascript
import { isValidCheckDigitOnGTIN } from "gtin-validator"

isValidCheckDigitOnGTIN("078000053401") //returns true
isValidCheckDigitOnGTIN("078000053401", "boolean") //returns true
isValidCheckDigitOnGTIN("078000053401", "error") //returns true
isValidCheckDigitOnGTIN("01012345678905") //returns false
isValidCheckDigitOnGTIN("01012345678905", "boolean") //returns false
isValidCheckDigitOnGTIN("01012345678905", "error") //throws error "Invalid GTIN: GTIN check digit is invalid."
isValidCheckDigitOnGTIN("", "error") //throws error "Invalid GTIN: The provided productCode is an empty string."
isValidCheckDigitOnGTIN("84656", "error") //throws error "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
isValidCheckDigitOnGTIN("722510035005", "error") //returns true
isValidCheckDigitOnGTIN(722510035005) //returns false
isValidCheckDigitOnGTIN(722510035005, "error") //throws error "Invalid GTIN: The provided productCode is not of type string."
isValidCheckDigitOnGTIN("722510035003", "error") //throws error "Invalid GTIN: GTIN check digit is invalid.""
isValidCheckDigitOnGTIN("722510035003", "boolean") //returns false
isValidCheckDigitOnGTIN("722510035003") //returns false
isValidCheckDigitOnGTIN("00012345678905") //returns true
```

### isValidStringLengthForGTIN(productCode)

Returns true if the provided productCode is a length for a GTIN (a 8, 12, 13, or 14 string of digits). If the length of the string is invalid, returns false by default or throws an error if "error" is passed as the second parameter.
This function does NOT check that a productCode has a valid check digit.

```javascript
import { isValidStringLengthForGTIN } from "gtin-validator"

isValidStringLengthForGTIN("45664") //returns false
isValidStringLengthForGTIN("45664", "boolean") //returns false
isValidStringLengthForGTIN("45664", "error") //throws error `Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits.`
isValidStringLengthForGTIN("89722510035005") //returns true
isValidStringLengthForGTIN("8722510035005") //returns true
isValidStringLengthForGTIN("722510035005") //returns true
isValidStringLengthForGTIN("78000053401", "boolean") //returns true
isValidStringLengthForGTIN("78000053401", "error") //returns true
isValidStringLengthForGTIN(722510035005) //returns false
isValidStringLengthForGTIN(722510035005) //throws error "Invalid GTIN: The provided productCode is not of type string."
```

### removeGTINLeadingZerosToUpcOrGTIN13(productCode)

Removes leading zeros on valid 13 or 14 digit long GTIN's, returning a shorter valid GTIN if possible. Throws an error if the the provided productCode is not a valid GTIN. Only a valid GTIN with a length of 12-14 digits is acceptable to pass as a productCode param.

```javascript
import { removeGTINLeadingZerosToUpcOrGTIN13 } from "gtin-validator"

removeGTINLeadingZerosToUpcOrGTIN13("00000012341238") //returns "000012341238"
removeGTINLeadingZerosToUpcOrGTIN13("0000012341238") //returns "000012341238"
removeGTINLeadingZerosToUpcOrGTIN13("000012341238") //returns "000012341238"
removeGTINLeadingZerosToUpcOrGTIN13("00614141453245") // returns "614141453245"
removeGTINLeadingZerosToUpcOrGTIN13("00012345678905") //returns "012345678905"
removeGTINLeadingZerosToUpcOrGTIN13("01234123412344") //returns "1234123412344"
removeGTINLeadingZerosToUpcOrGTIN13("078000053401") //returns "078000053401"
removeGTINLeadingZerosToUpcOrGTIN13("722510035005") //returns "722510035005"
removeGTINLeadingZerosToUpcOrGTIN13("710882350628") //returns "710882350628"
removeGTINLeadingZerosToUpcOrGTIN13("5901234123457") //returns "5901234123457"
removeGTINLeadingZerosToUpcOrGTIN13("792510035005") //throws error "Invalid GTIN: GTIN check digit is invalid."
removeGTINLeadingZerosToUpcOrGTIN13("") //throws error "Invalid GTIN: The provided productCode is an empty string."
removeGTINLeadingZerosToUpcOrGTIN13(84658555) //throws error "Invalid GTIN: The provided productCode is not of type string"
removeGTINLeadingZerosToUpcOrGTIN13(null) //throws error "Invalid GTIN: The provided productCode is not of type string"
removeGTINLeadingZerosToUpcOrGTIN13("84656") //throws error "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
removeGTINLeadingZerosToUpcOrGTIN13("84645456") //throws error "Invalid productCode provided to removeGTINLeadingZerosToUpcOrGTIN13: Only valid GTINs between 12-14 digits are accepted."
```

### getFormatOfGTIN(productCode)

Returns the GTIN format ("GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14") of the provided productCode or throws an error on an invalid GTIN.

```javascript
import { getFormatOfGTIN } from "gtin-validator"

getFormatOfGTIN("722510035005") //returns "GTIN-12"
getFormatOfGTIN("5901234123457") //returns "GTIN-13"
getFormatOfGTIN("0000012341238") //returns "GTIN-13"
getFormatOfGTIN("00012345678905") //returns "GTIN-14"
getFormatOfGTIN("12341238") //returns "GTIN-8"
getFormatOfGTIN("84656") //throws error: "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
getFormatOfGTIN("846548556815868") //throws error: "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
getFormatOfGTIN(84658555) //throws error: "Invalid GTIN: The provided productCode is not of type string."
getFormatOfGTIN("00012345678906") //throws error: "Invalid GTIN: GTIN check digit is invalid."
```

### getFormatOfMinifiedGTIN(productCode)

Returns the GTIN format ("GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14") of the provided productCode after removing its unnecessary leading zeros (runs removeGTINLeadingZerosToUpcOrGTIN13(productCode) before getting the productCode's format). Throws an error on an invalid GTIN.

```javascript
import { getFormatOfMinifiedGTIN } from "gtin-validator"

getFormatOfMinifiedGTIN("722510035005") // returns "GTIN-12"
getFormatOfMinifiedGTIN("0722510035005") // returns "GTIN-12"
getFormatOfMinifiedGTIN("5901234123457") // returns "GTIN-13"
getFormatOfMinifiedGTIN("05901234123457") // returns "GTIN-13"
getFormatOfMinifiedGTIN("50004544639356") // returns "GTIN-14"
getFormatOfMinifiedGTIN("00614141453245") // returns "GTIN-12"
getFormatOfMinifiedGTIN("12341238") // returns "GTIN-8"
getFormatOfGTIN("84656") //throws error: "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
getFormatOfGTIN("846548556815868") //throws error: "Invalid GTIN: Valid GTINs must 8 digits or 12-14 digits."
getFormatOfGTIN(84658555) //throws error: "Invalid GTIN: The provided productCode is not of type string."
```

### calculateCheckDigitForGTIN(productCodeWithoutCheckDigit)

Calculates check digit for GTIN strings of digits 7 or 11-13 characters long. Valid productCodeWithoutCheckDigit params are string of digits 7 or 11-13 characters long.

```javascript
import { calculateCheckDigitForGTIN } from "gtin-validator"

calculateCheckDigitForGTIN("72251003500") //returns "5"
calculateCheckDigitForGTIN("590123412345") //returns "7"
calculateCheckDigitForGTIN("1234123") //returns "8"
calculateCheckDigitForGTIN("00001234123") //returns "8"
calculateCheckDigitForGTIN("000001234123") //returns "8"
calculateCheckDigitForGTIN("0000001234123") //returns "8"
calculateCheckDigitForGTIN("") //throws Error: "Invalid GTIN: The provided productCode is an empty string."
calculateCheckDigitForGTIN("123456") //throws Error: "Invalid length for the provided productCodeWithoutCheckDigit param..."
calculateCheckDigitForGTIN("12345678") //throws Error: "Invalid length for the provided productCodeWithoutCheckDigit param..."
calculateCheckDigitForGTIN("1234567890") //throws Error: "Invalid length for the provided productCodeWithoutCheckDigit param..."
calculateCheckDigitForGTIN("12345678901234") //throws Error: "Invalid length for the provided productCodeWithoutCheckDigit param..."
calculateCheckDigitForGTIN(1234567) //throws Error: "Invalid GTIN: The provided productCode is not of type string."
calculateCheckDigitForGTIN(123456789012) //throws Error: "Invalid GTIN: The provided productCode is not of type string."
```

### generateRandomGTIN(gtinType)

Generates a random GTIN string, including a valid check digit of the type provided in gtinType param ("GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14").

```javascript
import { generateRandomGTIN } from "gtin-validator"

generateRandomGTIN("GTIN-8") // returns random 8 character long GTIN with a valid check digit, random example: "12341238"
generateRandomGTIN("GTIN-12") // returns random 12 character long GTIN with a valid check digit, random example: "722510035005"
generateRandomGTIN("GTIN-13") // returns random 13 character long GTIN with a valid check digit, random example: "5901234123457"
generateRandomGTIN("GTIN-14") // returns random 13 character long GTIN with a valid check digit, random example: "00012345678905"
generateRandomGTIN() // throws error: gtinType param for generateRandomGTIN must be "GTIN-8", "GTIN-12", "GTIN-13", or "GTIN-14".
generateRandomGTIN("") // throws error: gtinType param for generateRandomGTIN must be "GTIN-8", "GTIN-12", "GTIN-13", or "GTIN-14".
generateRandomGTIN("gtin") // throws error: gtinType param for generateRandomGTIN must be "GTIN-8", "GTIN-12", "GTIN-13", or "GTIN-14".
generateRandomGTIN("gtin-14") // throws error: gtinType param for generateRandomGTIN must be "GTIN-8", "GTIN-12", "GTIN-13", or "GTIN-14".
```

### generateArrayOfRandomGTINs(gtinType, numberOfGTINsToGenerate, guaranteeOnlyUniqueGTINs)

Generates an array of random GTINs of type GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14" or use "Any Valid GTIN" to potentially get a mix of different types.

Use "numberOfGTINsToGenerate" param to determine how many GTINs to generate.

By default, the guaranteeOnlyUniqueGTINs param is false, meaning the returned array of GTINs can contain duplicate GTINs. Pass true to guarantee each GTIN is unique, however, keep in mind this can dramatically increase the time it takes to generate the GTINs.

```javascript
import { generateArrayOfRandomGTINs } from "gtin-validator"

generateArrayOfRandomGTINs("Any Valid GTIN", 1234) // returns an array of 1234 GTINs of potentially varying GTIN types. Possibly contains duplicates.
generateArrayOfRandomGTINs("Any Valid GTIN", 1234, false) // returns an array of 1234 GTINs of potentially varying GTIN types. Possibly contains duplicates.
generateArrayOfRandomGTINs("Any Valid GTIN", 1234, true) // returns an array of 1234 GTINs of potentially varying GTIN types. All GTINs are unique.
generateArrayOfRandomGTINs("GTIN-12", 100000) // returns an array of 100,000 GTINs-12s. Possibly contains duplicates.
generateArrayOfRandomGTINs("GTIN-13", 123456, true) // returns an array of 123,456 GTIN-13s. All GTINs are unique.
```

This package was created and is maintained by the team at [GunCompare](https://guncompare.com/).
