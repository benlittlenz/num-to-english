export type NumberWordMap = {
  number: number;
  value: string;
};

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

const numberWordMapping = [
  { number: 1000000, value: "Million" },
  { number: 1000, value: "Thousand" },
  { number: 100, value: "Hundred" },
  { number: 90, value: "Ninety" },
  { number: 80, value: "Eighty" },
  { number: 70, value: "Seventy" },
  { number: 60, value: "Sixty" },
  { number: 50, value: "Fifty" },
  { number: 40, value: "Forty" },
  { number: 30, value: "Thirty" },
  { number: 20, value: "Twenty" },
  { number: 19, value: "Nineteen" },
  { number: 18, value: "Eighteen" },
  { number: 17, value: "Seventeen" },
  { number: 16, value: "Sixteen" },
  { number: 15, value: "Fifteen" },
  { number: 14, value: "Fourteen" },
  { number: 13, value: "Thirteen" },
  { number: 12, value: "Twelve" },
  { number: 11, value: "Eleven" },
  { number: 10, value: "Ten" },
  { number: 9, value: "Nine" },
  { number: 8, value: "Eight" },
  { number: 7, value: "Seven" },
  { number: 6, value: "Six" },
  { number: 5, value: "Five" },
  { number: 4, value: "Four" },
  { number: 3, value: "Three" },
  { number: 2, value: "Two" },
  { number: 1, value: "One" },
  { number: 0, value: "Zero" },
];

function toFixed(number: number): number {
  return Number(Number(number).toFixed(2));
}

convertNumToWords(22);
