import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
5 2 2
1
2
3
4
5
1 3 6
2 2 5
1 5 2
2 3 5
`.trim();

const ex1OUTPUT = `
17
12
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution");
  expect(stdout()).toBe(ex1OUTPUT);
});

test("ex1: Bottom Up Version", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution.bottomUp");
  expect(stdout()).toBe(ex1OUTPUT);
});
