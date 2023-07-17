import { checkConfig } from "./checkConfig";
import { greet } from "./greet";

test("モック関数は実行された", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toBeCalled();
});

test("モック関数は実行されていない", () => {
  const mockFn = jest.fn();
  expect(mockFn).not.toBeCalled();
});

test("モック関数は実行された回数を記録している", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(1);
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(2);
});

test("モック関数は関数の中でも実行できる", () => {
  const mockFn = jest.fn();
  const greet = () => {
    mockFn();
  };
  greet();
  expect(mockFn).toHaveBeenCalled();
});

test("モック関数は実行時の引数を記録している", () => {
  const mockFn = jest.fn();
  const greet = (msg: string) => {
    mockFn(msg);
  };
  greet("Hi!");
  expect(mockFn).toHaveBeenCalledWith("Hi!");
});

test("モック関数はテスト対象の引数として使用できる", () => {
  const mockFn = jest.fn();
  // 本来は第二引数は関数だが、それを`mockFn`が置き換えてる
  greet("Oda", mockFn);
  expect(mockFn).toHaveBeenCalledWith("Hello! Oda");
});

test("モック関数は実行時引数のオブジェクト検証ができる", () => {
  const mockFn = jest.fn();
  checkConfig(mockFn);
  expect(mockFn).toHaveBeenCalledWith({
    mock: true,
    feature: { spy: true },
  });
  // expectに引数ない場合あるんかい！
  expect(mockFn).toHaveBeenCalledWith(
    expect.objectContaining({
      feature: { spy: true },
    })
  );
});
