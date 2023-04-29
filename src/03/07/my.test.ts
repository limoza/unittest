import { timeout, wait } from ".";
describe("非同期のテスト", () => {
  test("Promiseをreturnする方法", () => {
    expect(wait(50)).resolves.toBe(50);
  });

  test("async/awaitを使った方法", async () => {
    expect(await wait(50)).toBe(50);
  });

  test("rejectされるテスト", () => {
    return expect(timeout(50)).rejects.toBe(50);
  });
});
