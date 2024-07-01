import { describe, it, expect } from "vitest";

import { equalArrays } from "./equalArrays";

describe("equalArrays", () => {
  it("should return true for two empty arrays", () => {
    expect(equalArrays([], [])).toBe(true);
  });

  it("should return true for two arrays with the same elements in the same order", () => {
    expect(equalArrays([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it("should return false for arrays with different lengths", () => {
    expect(equalArrays([1, 2, 3], [1, 2])).toBe(false);
  });

  it("should return false for arrays with the same elements in different orders", () => {
    expect(equalArrays([1, 2, 3], [3, 2, 1])).toBe(false);
  });

  it("should return false for arrays with different elements", () => {
    expect(equalArrays([1, 2, 3], [4, 5, 6])).toBe(false);
  });

  it("should return true for nested arrays that are equal", () => {
    expect(
      equalArrays(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [1, 2],
          [3, 4],
        ]
      )
    ).toBe(true);
  });

  it("should return false for nested arrays that are not equal", () => {
    expect(
      equalArrays(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [1, 2],
          [4, 3],
        ]
      )
    ).toBe(false);
  });
});
