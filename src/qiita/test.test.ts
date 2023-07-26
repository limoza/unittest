import { httpError, notFoundError, qiitaData } from "./fixture/fixture";
import * as Fetchers from "./index";
import { getQiitaData } from "./index";
jest.mock("./index");

const mockGetQiitaData = (input: any, status = 200) => {
  if (status > 200) {
    return jest
      .spyOn(Fetchers, "getQiitaData")
      .mockRejectedValueOnce(httpError);
  }
  try {
    if (input.length === 0) {
      throw new Error("1文字以上入力してください");
    }
    return jest.spyOn(Fetchers, "getQiitaData").mockResolvedValue([input]);
  } catch (err) {
    return jest
      .spyOn(Fetchers, "getQiitaData")
      .mockRejectedValueOnce(notFoundError);
  }
};

const inputFactory = (input?: any) => {
  const data = [input];
  return data;
};

test("データ取得できた場合", async () => {
  const input = qiitaData;
  const mock = mockGetQiitaData(input);
  const data = await getQiitaData("f0lst");
  expect(data).toEqual(
    expect.arrayContaining([expect.objectContaining(qiitaData)])
  );
  expect(mock).toHaveBeenCalled();
});

test("記事が一件もない場合のエラー", async () => {
  expect.assertions(2);
  const input = "";
  const mock = mockGetQiitaData(input);
  await getQiitaData("ffff").catch((err) => {
    expect(err).toMatchObject({ err: { message: "not found" } });
    expect(mock).toHaveBeenCalled();
  });
});

test("通信エラー", async () => {
  expect.assertions(2);
  const input = inputFactory();
  const mock = mockGetQiitaData(input, 500);
  await getQiitaData("f0lst").catch((err) => {
    expect(err).toMatchObject({ err: { message: "internal server error" } });
    expect(mock).toHaveBeenCalled();
  });
});
