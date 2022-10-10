import { calculateCheckDigitForGTIN } from "./calculateCheckDigitForGTIN"
import { errorsList } from "./errorsList"

const validGtinTypeParams = ["GTIN-8", "GTIN-12", "GTIN-13", "GTIN-14"]

export const gtinLengthMap = {
  "GTIN-8": 8,
  "GTIN-12": 12,
  "GTIN-13": 13,
  "GTIN-14": 14,
}

const digits = "0123456789"

/**
 * @description Generates a random GTIN string, including a valid check digit of the type provided in gtinType param.
 * @param gtinType "GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14"
 * @example generateRandomGTIN("GTIN-8") // returns random 8 character long GTIN with a valid check digit, random example: "12341238"
 * generateRandomGTIN("GTIN-12") // returns random 12 character long GTIN with a valid check digit, random example: "722510035005"
 * generateRandomGTIN("GTIN-13") // returns random 13 character long GTIN with a valid check digit, random example: "5901234123457"
 * generateRandomGTIN("GTIN-14") // returns random 13 character long GTIN with a valid check digit, random example: "00012345678905"
 * generateRandomGTIN() // throws error: gtinType param for generateRandomGTIN must be "GTIN-8", "GTIN-12", "GTIN-13", or "GTIN-14".
 * generateRandomGTIN("") // throws error: gtinType param for generateRandomGTIN must be "GTIN-8", "GTIN-12", "GTIN-13", or "GTIN-14".
 * generateRandomGTIN("gtin") // throws error: gtinType param for generateRandomGTIN must be "GTIN-8", "GTIN-12", "GTIN-13", or "GTIN-14".
 * generateRandomGTIN("gtin-14") // throws error: gtinType param for generateRandomGTIN must be "GTIN-8", "GTIN-12", "GTIN-13", or "GTIN-14".
 * @returns a random GTIN, including a valid check digit of the type provided in gtinType param.
 */
export function generateRandomGTIN(
  gtinType: "GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14",
) {
  if (!validGtinTypeParams.includes(gtinType)) {
    throw new Error(errorsList.invalidGtinTypeForGenerateRandomGTIN)
  } else {
    let gtinWithoutCheckDigit = ""
    for (let i = 0; i < gtinLengthMap[gtinType] - 1; i++) {
      gtinWithoutCheckDigit += digits.charAt(Math.floor(Math.random() * digits.length))
    }
    return (gtinWithoutCheckDigit += calculateCheckDigitForGTIN(gtinWithoutCheckDigit))
  }
}
