import { getGreet } from ".";
import * as Fetchers from "../fetchers";
import { httpError } from "../fetchers/fixtures";

jest.mock("../fetchers");

//jest.spyOn(対象のオブジェクト, 対象の関数名)

// 存在しない関数を指定すればエラーになる
// jest.spyOn(Fetchers, "getMyInfo");
test("データ取得成功時: ユーザー名がない場合", async () => {
  jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
    id: "xxx",
    email: "hoge@fu.com",
  });
  await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
});

test("データ取得成功時: ユーザー名がある場合", async () => {
  jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
    id: "xxx",
    email: "hoge@fu.com",
    name: "taro",
  });
  await expect(getGreet()).resolves.toBe("Hello, taro!");
});

test("データ取得失敗時", async () => {
  jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);
  await expect(getGreet()).rejects.toMatchObject({
    err: { message: "internal server error" },
  });
});
