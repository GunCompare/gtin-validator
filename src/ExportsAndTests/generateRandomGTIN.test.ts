import { errorsList } from "./errorsList"
import { generateRandomGTIN, gtinLengthMap } from "./generateRandomGTIN"

test.each(["GTIN-8", "GTIN-12", "GTIN-13", "GTIN-14"])(
  "generateRandomGTIN valid tests",
  (gtinType) => {
    // @ts-ignore
    expect(generateRandomGTIN(gtinType)).toHaveLength(gtinLengthMap[gtinType])
    // @ts-ignore
    expect(generateRandomGTIN(gtinType)).toMatch(/^(\d{12,14}|\d{8})$/)
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
