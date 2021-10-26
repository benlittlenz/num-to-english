import { NumberWordMap } from "./types";
import { numberWordMapping, toFixed } from "./lib";

export function convertNumToWords(number: number): string {
  const words: string[] = handleConvert(number);
  return words.join(" ");
}

function handleConvert(number: number): string[] {
  const words: string[] = [];
  const num = toFixed(number);

  const splitNumber = String(num).split(".");

  const wordMatch = numberWordMapping.find(
    (elem) => Number(splitNumber[0]) >= elem.number
  ) as NumberWordMap;

  const quotient = Math.floor(number / wordMatch.number);

  // Remaining value i.e. 33 % 30 === 1.1
  const remaining = number % wordMatch.number;
  console.log("remaining", remaining);
  if (quotient === 1) {
    words.push(wordMatch.value);
  }

  if (remaining > 0) words.push(...handleConvert(remaining));

  return words;
}

convertNumToWords(22);
