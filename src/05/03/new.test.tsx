import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./Form";

test("名前の表示", () => {
  render(<Form name="taro" />);
  expect(screen.getByText("taro")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("見出しの確認", () => {
  render(<Form name="ken" />);
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
    "アカウント情報"
  );
});

// ~~~~

test("ボタン押下で、イベントハンドラ実行", () => {
  const mockFn = jest.fn();
  render(<Form name="taaro" onSubmit={mockFn} />);
  fireEvent.click(screen.getByRole("button"));
  expect(mockFn).toHaveBeenCalled();
});
