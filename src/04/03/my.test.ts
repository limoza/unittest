import { getGreet } from ".";
import * as Fetchers from "../fetchers";
import { httpError } from "../fetchers/fixtures";

jest.mock("../fetchers");

test("成功するテスト ユーザー名なし", async () => {
  jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
    id: "xxx",
    email: "hoge@fu.com",
  });
  await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
});

test("成功するテスト ユーザー名なし", async () => {
  jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
    id: "xxx",
    name: "Taro",
    email: "hoge@fu.com",
  });
  await expect(getGreet()).resolves.toBe("Hello, Taro!");
});

test("しっぱーい", async () => {
  jest.spyOn(Fetchers, "getMyProfile").mockRejectedValue(httpError);
  await expect(getGreet()).rejects.toMatchObject({
    err: { message: "internal server error" },
  });
});
