import { describe, it, expect } from "vitest";

import { truncateString } from "./truncateString";

describe("truncateString : 문자열과 최대 길이를 넣으면,  ", () => {
  it("문자열이 최대 길이보다 짧거나 같을 때 원래 문자열을 반환한다", () => {
    expect(truncateString("안녕하세요", 5)).toBe("안녕하세요");
    expect(truncateString("Hello", 5)).toBe("Hello");
  });

  it('문자열이 최대 길이보다 길 때 잘린 문자열과 "..."을 반환한다', () => {
    expect(truncateString("안녕하세요", 3)).toBe("안녕하...");
    expect(truncateString("Hello, World!", 5)).toBe("Hello...");
  });

  it("빈 문자열을 입력했을 때 빈 문자열을 반환한다", () => {
    expect(truncateString("", 5)).toBe("");
  });
});
