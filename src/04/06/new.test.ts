import { checkLength } from ".";
import * as Fetchers from "../fetchers";
import { postMyArticle } from "../fetchers";
import { httpError, postMyArticleData } from "../fetchers/fixtures";
import { ArticleInput } from "../fetchers/type";

jest.mock("../fetchers");

const mockPostMyArticles = (input: ArticleInput, status = 200) => {
  if (status > 200) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
  try {
    checkLength(input.title);
    checkLength(input.body);
    return jest.spyOn(Fetchers, "postMyArticle").mockResolvedValue({
      ...postMyArticleData,
      ...input,
    });
  } catch (err) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
};

const inputFactory = (input?: Partial<ArticleInput>): ArticleInput => {
  return {
    tags: ["testing"],
    title: "TSのテストの書き方",
    body: "something...",
    ...input,
  };
};

test("バリデーションに成功した場合、成功レスポンスが買える", async () => {
  // バリデーションに通る入力値を用意
  // ファクトリー関数そのまんま
  const input = inputFactory();
  // 入力値を含んだ成功レスポンスが買えるようモックを施す
  // 施すて表現なん？
  const mock = mockPostMyArticles(input);
  // テスト対象の関数にinputを与える
  const data = await postMyArticle(input);

  expect(data).toMatchObject(expect.objectContaining(input));
  expect(mock).toHaveBeenCalled();
});

test("バリデーションに失敗した場合、rejectされる", async () => {
  expect.assertions(2);
  //空白できちゃった
  const input = inputFactory({ title: "", body: "" });
  const mock = mockPostMyArticles(input);
  await postMyArticle(input).catch((err) => {
    expect(err).toMatchObject({ err: { message: expect.anything() } });
    expect(mock).toHaveBeenCalled();
  });
});

test("データの取得に失敗した場合、rejectされる", async () => {
  expect.assertions(2);
  //値は問題ない
  const input = inputFactory();
  // statusがアウト
  const mock = mockPostMyArticles(input, 500);
  await postMyArticle(input).catch((err) => {
    expect(err).toMatchObject({ err: { message: "internal server error" } });
    expect(mock).toHaveBeenCalled();
  });
});
