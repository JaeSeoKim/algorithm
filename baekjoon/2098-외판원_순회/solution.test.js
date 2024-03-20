import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0
`.trim();

const ex1OUTPUT = `
35
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});

const ex2INPUT = `
4
0 1 0 0
0 0 1 1
1 1 0 1
0 1 1 0
`.trim();

const ex2OUTPUT = `
4
`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});
