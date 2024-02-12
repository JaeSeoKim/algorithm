import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
8 30 4 30
7
9
7
30
2
7
9
25
`.trim();

const ex1OUTPUT = `
5
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});

const ex2INPUT = `
8 50 4 7
2
7
9
25
7
9
7
30
`.trim();

const ex2OUTPUT = `
4
`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});
