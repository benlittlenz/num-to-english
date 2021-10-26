import { convertNumToWords } from "../src/ConvertToWords";

describe("Initialize convert number to words", () => {
  const wordsShouldEqual = (number: number, expected: string) => {
    expect(convertNumToWords(number)).toBe(expected);
  };

  it("1.15 should return One Dollar and Fifteen Cents", () => {
    wordsShouldEqual(1.15, "One Dollar and Fifteen Cents");
  });

  it("3.75 should return Three Dollars and Seventy Five Cents", () => {
    wordsShouldEqual(3.75, "Three Dollars and Seventy Five Cents");
  });

  it("22 should return Twenty Two Dollars", () => {
    wordsShouldEqual(22, "Twenty Two Dollars");
  });

  it("50 should return Fifty Dollars", () => {
    wordsShouldEqual(50, "Fifty Dollars");
  });

  it("200 should return Two Hundred Dollars", () => {
    wordsShouldEqual(200, "Two Hundred Dollars");
  });
});
