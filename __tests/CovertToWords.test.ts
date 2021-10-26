import { convertNumToWords } from "../src/ConvertToWords";

describe("Initialize convert number to words", () => {
  const wordsShouldEqual = (number: number, expected: string) => {
    expect(convertNumToWords(number)).toBe(expected);
  };

  it("22 should return Twenty Two", () => {
    wordsShouldEqual(22, "Twenty Two");
  });

  it("50 should return Twenty Two", () => {
    wordsShouldEqual(22, "Twenty Two");
  });
});
