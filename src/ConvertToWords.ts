import { NumberWordMap } from "./types";
import { numberWordMapping, toFixed, isFloat } from "./lib";

document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.getElementById(
    "convertBtn"
  ) as HTMLFormElement;
  const resultContainer = document.getElementById(
    "resultContainer"
  ) as HTMLFormElement;

  convertButton.addEventListener("click", () => {
    const convertNumber = document.getElementById(
      "converInput"
    ) as HTMLFormElement;
    const result = convertNumToCurrency(Number(convertNumber.value));

    resultContainer.textContent = result;
  });
});

export function convertNumToCurrency(number: number): string {
  console.log("convertNumToWords NUMBER ", number);
  const splitNumber = String(toFixed(number)).split(".");

  const words = [...handleConvert(Number(splitNumber[0]))];
  Number(splitNumber[0]) === 1 ? words.push("Dollar") : words.push("Dollars");

  // Check if input number contains decimals
  const isFloatingNumber = isFloat(number);
  if (isFloatingNumber) {
    words.push("and");
    words.push(...handleConvert(Number(splitNumber[1])));
    words.push("Cents");
  }

  return words.join(" ");
}

function handleConvert(number: number): string[] {
  const words: string[] = [];

  const wordMatch = numberWordMapping.find(
    (elem) => Number(number) >= elem.number
  ) as NumberWordMap;

  const quotient = Math.floor(number / wordMatch.number);

  // Remaining value i.e. 33 % 30 === 1.1
  const remaining = number % wordMatch.number;

  const powerOfTen = number % 10 === 0;
  console.log("powerOfTen >>>> ", powerOfTen);
  console.log("quotient >>>> ", quotient);
  console.log("remaining >>>> ", remaining);

  if (quotient === 1) {
    /*
      When a number is a power of 10 and starts with 1 (i.e. 100 or 1000) just the Hundred or Thousand value is returned. To resolve this, we check if
      A. the word match value is a power of 10
      B. the number starts with a 1

      If both statements are correct, we call the handleConvert function again
    */
    if (Number(wordMatch.number) % 10 === 0) {
      console.log("IS POWER OF 10");
      const firstNumber = Number(String(number)[0]);
      if (firstNumber === 1) {
        console.log("firstNumber", firstNumber);
        words.push(...handleConvert(firstNumber));
      }
    }
    words.push(wordMatch.value);
  } else {
    words.push(...handleConvert(quotient), wordMatch.value);
  }

  // Recursion: Re-run handleConvert function with remaining value
  if (remaining > 0) words.push(...handleConvert(remaining));

  return words;
}
