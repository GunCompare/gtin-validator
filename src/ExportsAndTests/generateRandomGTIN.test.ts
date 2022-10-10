import { errorsList } from "./errorsList"
import { generateRandomGTIN, gtinLengthMap } from "./generateRandomGTIN"
import { isValidGTIN } from "./isValidGTIN"

test.each(["GTIN-8", "GTIN-12", "GTIN-13", "GTIN-14"])(
  "generateRandomGTIN valid tests",
  (gtinType) => {
    // Test GTIN length
    // @ts-ignore
    expect(generateRandomGTIN(gtinType)).toHaveLength(gtinLengthMap[gtinType])
    //Test randomly generated GTIN is a valid GTIN
    // @ts-ignore
    expect(isValidGTIN(generateRandomGTIN(gtinType))).toBe(true)
  },
)
test.each([["gtin-8", "GtIn-12", "", undefined, "GTIN-15"]])(
  "generateRandomGTIN valid tests",
  (gtinType) => {
    // @ts-ignore
    expect(() => generateRandomGTIN(gtinType)).toThrowError(
      errorsList.invalidGtinTypeForGenerateRandomGTIN,
    )
  },
)
