import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
5
8
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
1 5
`.trim();

const ex1OUTPUT = `
4
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});
