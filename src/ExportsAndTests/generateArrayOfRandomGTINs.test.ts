import { errorsList } from "./errorsList"
import { generateArrayOfRandomGTINs } from "./generateArrayOfRandomGTINs"
import { gtinLengthMap } from "./generateRandomGTIN"
import { isValidGTIN } from "./isValidGTIN"
const isArrayUnique = (arr: any[]) =>
  Array.isArray(arr) && new Set(arr).size === arr.length

test.each([
  ["Any Valid GTIN", 1234, true],
  ["Any Valid GTIN", 99, false],
])(
  'generateArrayOfRandomGTINs "Any Valid GTIN" valid tests',
  (gtinType, numberOfGTINsToGenerate, guaranteeOnlyUniqueGTINs) => {
    let randomGTINs = generateArrayOfRandomGTINs(
      //@ts-ignore
      gtinType,
      numberOfGTINsToGenerate,
      guaranteeOnlyUniqueGTINs,
    )
    expect(randomGTINs).toHaveLength(numberOfGTINsToGenerate)
    if (guaranteeOnlyUniqueGTINs === true) {
      expect(isArrayUnique(randomGTINs)).toBeTruthy()
    }

    randomGTINs.forEach((gtin) => {
      expect(isValidGTIN(gtin)).toBe(true)
    })
  },
)
test.each([
  ["GTIN-8", 100, false],
  ["GTIN-12", 1, false],
  ["GTIN-13", 1430, false],
  ["GTIN-14", 505, false],
  ["GTIN-8", 1234, true],
])(
  "generateArrayOfRandomGTINs valid tests",
  (gtinType, numberOfGTINsToGenerate, guaranteeOnlyUniqueGTINs) => {
    //@ts-ignore
    let randomGTINs = generateArrayOfRandomGTINs(
      //@ts-ignore
      gtinType,
      numberOfGTINsToGenerate,
      guaranteeOnlyUniqueGTINs,
    )
    expect(randomGTINs).toHaveLength(numberOfGTINsToGenerate)

    if (guaranteeOnlyUniqueGTINs === true) {
      expect(isArrayUnique(randomGTINs)).toBeTruthy()
    }

    randomGTINs.forEach((gtin) => {
      expect(isValidGTIN(gtin)).toBe(true)
      //@ts-ignore
      expect(gtin).toHaveLength(gtinLengthMap[gtinType])
    })
  },
)

test.each([
  [
    "GTIN-8",
    "100",
    false,
    'numberOfGTINsToGenerate param in generateArrayOfRandomGTINs must be of type "number" and > 0.',
  ],
  ["GTIN-15", 1, false, errorsList.invalidGtinTypeGenerateArrayOfRandomGTINs],
  [
    "GTIN-13",
    0,
    true,
    'numberOfGTINsToGenerate param in generateArrayOfRandomGTINs must be of type "number" and > 0.',
  ],
  [
    "GTIN-14",
    15,
    null,
    'guaranteeOnlyUniqueGTINs param for generateArrayOfRandomGTINs must be of type "boolean". If nothing is provided for this param, it defaults to false.',
  ],
])(
  "generateArrayOfRandomGTINs invalid tests",
  (gtinType, numberOfGTINsToGenerate, guaranteeOnlyUniqueGTINs, error) => {
    //@ts-ignore
    expect(() =>
      generateArrayOfRandomGTINs(
        //@ts-ignore
        gtinType,
        numberOfGTINsToGenerate,
        guaranteeOnlyUniqueGTINs,
      ),
    ).toThrowError(error)
  },
)
