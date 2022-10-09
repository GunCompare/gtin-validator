# gtin-validator

gtin-validator allows you to validate and work with GTIN, UPC, and other product code formats.

```
npm i gtin-validator
```

## Examples

### isValidGTIN(productCode)

Returns true if provided productCode is a valid GTIN (valid length and check digit). On invalid productCodes, returns false by default or throws an error if "error" is passed as the second parameter.

```javascript
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
