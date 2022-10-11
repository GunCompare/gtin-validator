import { calculateCheckDigitForGTIN } from "./calculateCheckDigitForGTIN"
import { errorsList } from "./errorsList"
import { generateRandomGTIN } from "./generateRandomGTIN"
import { randomGtinType } from "./helpersFunctions"

const validGtinTypeParamsForGenerateArrayOfRandomGTINs = [
  "GTIN-8",
  "GTIN-12",
  "GTIN-13",
  "GTIN-14",
  "Any Valid GTIN",
]

/**
 * @description Generates an array of random GTINs of type GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14" or use "Any Valid GTIN" to potentially get a mix of different types.
 * @param gtinType "GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14" | "Any Valid GTIN". "Any Valid GTIN" will possibly return GTINs of all four lengths.
 * @param numberOfGTINsToGenerate The number of GTINs you want to generate.
 * @param [guaranteeOnlyUniqueGTINs] true guarantees Unique GTINs, defaults to false. Setting this to true can dramatically increase the time to generate a large number of GTINs.
 * @returns array and array of GTINs.
 */
export function generateArrayOfRandomGTINs(
  gtinType: "GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14" | "Any Valid GTIN",
  numberOfGTINsToGenerate: number,
  guaranteeOnlyUniqueGTINs: boolean = false,
) {
  if (!validGtinTypeParamsForGenerateArrayOfRandomGTINs.includes(gtinType)) {
    throw new Error(errorsList.invalidGtinTypeGenerateArrayOfRandomGTINs)
  }
  if (typeof numberOfGTINsToGenerate !== "number" || numberOfGTINsToGenerate <= 0) {
    throw new Error(
      'numberOfGTINsToGenerate param in generateArrayOfRandomGTINs must be of type "number" and > 0.',
    )
  }
  if (typeof guaranteeOnlyUniqueGTINs !== "boolean") {
    throw Error(
      'guaranteeOnlyUniqueGTINs param for generateArrayOfRandomGTINs must be of type "boolean". If nothing is provided for this param, it defaults to false.',
    )
  }
  let randomlyGeneratedArrayOfGTINs: string[] = []

  let r = 1

  if (guaranteeOnlyUniqueGTINs) {
    let containsNoDuplicates = false
    while (r <= numberOfGTINsToGenerate && !containsNoDuplicates) {
      gtinType = gtinType !== "Any Valid GTIN" ? gtinType : randomGtinType()
      let randomSingleGTIN = generateRandomGTIN(gtinType)

      randomlyGeneratedArrayOfGTINs.push(randomSingleGTIN)
      r++

      if (r === numberOfGTINsToGenerate) {
        let uniqueRandomlyGeneratedArrayOfGTINs = [
          ...new Set(randomlyGeneratedArrayOfGTINs),
        ]
        if (uniqueRandomlyGeneratedArrayOfGTINs.length === numberOfGTINsToGenerate) {
          return uniqueRandomlyGeneratedArrayOfGTINs
        }
        r = uniqueRandomlyGeneratedArrayOfGTINs.length
        randomlyGeneratedArrayOfGTINs = uniqueRandomlyGeneratedArrayOfGTINs
      }
    }
  } else {
    while (r <= numberOfGTINsToGenerate) {
      gtinType = gtinType !== "Any Valid GTIN" ? gtinType : randomGtinType()
      let randomSingleGTIN = generateRandomGTIN(gtinType)
      randomlyGeneratedArrayOfGTINs.push(randomSingleGTIN)
      r++
    }
  }
  return randomlyGeneratedArrayOfGTINs
}
