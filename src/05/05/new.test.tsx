import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { Agreement } from "./Agreement";
import { Form } from "./Form";
import { InputAccount } from "./InputAccount";

test("legendのチェック", () => {
  render(<Agreement />);
  expect(
    screen.getByRole("group", { name: "利用規約の同意" })
  ).toBeInTheDocument();
});

test("チェックボックスは未チェック状態よね", () => {
  render(<Agreement />);
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});

const user = UserEvent.setup();

test("メールアドレス入力欄", async () => {
  render(<InputAccount />);
  const textBox = screen.getByRole("textbox", { name: "メールアドレス" });
  const value = "hoge@fuga.comm";
  await user.type(textBox, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test("パスワード入力", async () => {
  render(<InputAccount />);
  const password = screen.getByPlaceholderText("8文字以上で入力");
  const val = "12345678";
  await user.type(password, val);
  expect(screen.getByDisplayValue(val)).toBeInTheDocument();
});

test("サインアップボタンは非活性", () => {
  render(<Form />);
  expect(screen.getByRole("button", { name: "サインアップ" })).toBeDisabled();
});

test("サインアップボタンが活性", async () => {
  render(<Form />);
  await user.click(screen.getByRole("checkbox"));
  expect(screen.getByRole("button", { name: "サインアップ" })).toBeEnabled();
});
