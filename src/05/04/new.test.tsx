import { render, screen, within } from "@testing-library/react";
import { ArticleList } from "./ArticleList";
import { items } from "./fixture";

test("itemsの数だけ表示される", () => {
  render(<ArticleList items={items} />);
  expect(screen.getAllByRole("listitem")).not.toHaveLength(2);
  expect(screen.getAllByRole("listitem")).toHaveLength(3);
});

test("listが表示されている", () => {
  render(<ArticleList items={items} />);
  expect(screen.getByRole("list")).toBeInTheDocument();
});

test("テスト対象を任意の対象とする", () => {
  render(<ArticleList items={items} />);
  expect(
    within(screen.getByRole("list")).getAllByRole("listitem")
  ).toHaveLength(3);
});

test("一覧が空の時、メッセージが表示される", () => {
  render(<ArticleList items={[]} />);
  const list = screen.queryByRole("list");
  expect(list).toBeNull();
  expect(screen.getByText("投稿記事がありません")).toBeInTheDocument();
});
