import { add, sub } from ".";

describe("add", () => {
  test("50+50は100", () => {
    expect(add(50, 50)).toBe(100);
  });
  test("上限は100だよ", () => {
    expect(add(50, 70)).toBe(100);
  });
});

describe("sub", () => {
  test("50-50=0", () => {
    expect(sub(50, 50)).toBe(0);
  });
  test("下限は0", () => {
    expect(sub(50, 51)).toBe(0);
  });
});
