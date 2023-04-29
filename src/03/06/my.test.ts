describe("文字列の検証", () => {
  const str = "hello world";
  test("toContain", () => {
    expect(str).toContain("hell");
  });
  test("toMatch", () => {
    expect(str).toMatch(/orl/);
  });

  test("toHaveLength", () => {
    expect(str).toHaveLength(11);
  });
});

describe("配列の検証", () => {
  const arr = ["foo", "bar", "buzz"];
  test("toContain", () => {
    expect(arr).toContain("buzz");
  });

  test("toHaveLength", () => {
    expect(arr).toHaveLength(3);
  });

  test("toContainEqual", () => {
    expect(arr).toContainEqual("foo");
  });

  test("arrayContaining", () => {
    expect(arr).toEqual(expect.arrayContaining(["bar", "buzz"]));
  });
});

describe("オブジェクトの検証", () => {
  const obj = {
    name: "yamada taro",
    age: 21,
  };

  test("toMatchObject", () => {
    expect(obj).toMatchObject({ name: "yamada taro" });
  });

  test("toHaveProperty", () => {
    expect(obj).toHaveProperty("name");
    expect(obj).not.toHaveProperty("gender");
  });

  test("objectContaining", () => {
    expect(obj).toEqual(expect.objectContaining({ age: 21 }));
  });
});
