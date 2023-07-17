/* 
  - jest.useFakeTimers
    - Jestに偽のタイマーを使用するよう指示
  - jest.setSystemTime
    - 偽のタイマーで使用される現在システム時刻を設定
  - jest.useRealTimers
    - jestに真のタイマーを使用するよう指示
*/

import { greetByTime } from ".";

describe("greetByTime(", () => {
  // テスト実行ごとに偽タイマー使うぜ〜って言う
  beforeEach(() => {
    jest.useFakeTimers();
  });
  // テスト終了ごとに元の本物のタイマー使うぜ〜って言う
  afterEach(() => {
    jest.useRealTimers();
  });
  test("指定時間を待つと、経過時間をもってresolveされる", () => {
    jest.setSystemTime(new Date(2023, 7, 18, 8, 0, 0));
    expect(greetByTime()).toBe("おはよう");
  });
  test("指定時間を待つと、経過時間をもってresolveされる", () => {
    jest.setSystemTime(new Date(2023, 7, 18, 14, 0, 0));
    expect(greetByTime()).toBe("こんにちは");
  });
  test("指定時間を待つと、経過時間をもってresolveされる", () => {
    jest.setSystemTime(new Date(2023, 7, 18, 21, 0, 0));
    expect(greetByTime()).toBe("こんばんは");
  });
});
