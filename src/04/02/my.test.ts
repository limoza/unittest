import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
  ...jest.requireActual("./greet"),
  sayGoodBye: (name: string) => `Good bye, ${name}`,
}));

test("本来の実装", () => {
  expect(greet("Taro")).toBe("Hello! Taro.");
});

test("say goodbye", () => {
  expect(sayGoodBye("taro")).toBe("Good bye, taro");
});
