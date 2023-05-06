test("実行されたことの確認", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toBeCalled();
});

test("実行されていないことの確認", () => {
  const mockFn = jest.fn();
  expect(mockFn).not.toBeCalled();
});

test("mock関数は実行された回数を記録できる", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toBeCalled();
  expect(mockFn).toHaveBeenCalledTimes(1);
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(2);
});

test("引数も記録することができる", () => {
  const mockFn = jest.fn();
  const greet = (msg: string) => {
    mockFn(msg);
  };
  const msg = "Hi!";
  greet(msg);
  expect(mockFn).toHaveBeenCalledWith(msg);
});
