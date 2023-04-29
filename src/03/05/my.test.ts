import { add } from ".";
describe("throw", () => {
  test("0~100で入力しないとエラー", () => {
    expect(() => add(10, 111)).toThrow();
    expect(() => add(10, 111)).toThrow("入力値は0〜100の間で入力してください");
  });
});
