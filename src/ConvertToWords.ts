import { NumberWordMap } from "./types";
import { numberWordMapping, toFixed, isFloat } from "./lib";

export function convertNumToWords(number: number): string {
  const words: string[] = convertToCurrency(number);
  console.log("WORDS >>>> ", words);
  return words.join(" ");
}

function convertToCurrency(number: number): string[] {
  const splitNumber = String(toFixed(number)).split(".");

  const words = [...handleConvert(Number(splitNumber[0]))];
  Number(splitNumber[0]) === 1 ? words.push("Dollar") : words.push("Dollars");

  const isFloatingNumber = isFloat(number);

  if (isFloatingNumber) {
    words.push("and");
    words.push(...handleConvert(Number(splitNumber[1])));
    words.push("Cents");
  }

  return words;
}

function handleConvert(number: number): string[] {
  const words: string[] = [];

  const wordMatch = numberWordMapping.find(
    (elem) => Number(number) >= elem.number
  ) as NumberWordMap;

  if (number <= 100) {
    words.push(wordMatch.value);
    number -= wordMatch.number;
    if (number > 0) {
      words.push(...handleConvert(number));
    }
    return words;
  }

  const quotient = Math.floor(number / wordMatch.number);
  console.log("quotient >>> ", quotient);
  console.log("WORD MATCH", wordMatch.number);
  // Remaining value i.e. 33 % 30 === 1.1
  const remaining = number % wordMatch.number;

  if (quotient === 1) {
    words.push(wordMatch.value);
  } else {
    words.push(...handleConvert(quotient), wordMatch.value);
  }

  // Recursion: Re-run handleConvert function with remaining value
  if (remaining > 0) words.push(...handleConvert(remaining));

  return words;
}
