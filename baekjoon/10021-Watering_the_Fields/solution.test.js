import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
3 11
0 2
5 0
4 3
`.trim();

const ex1OUTPUT = `
46
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});

const ex2INPUT = `
3 50
0 2
5 0
4 3
`.trim();

const ex2OUTPUT = `
-1
`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});

const ex3INPUT = `
10 18
6 17
3 20
12 14
10 7
20 10
18 18
11 13
13 6
4 17
3 7
`.trim();

const ex3OUTPUT = `
425
`.trim();

test("ex3", async () => {
  const stdout = stdioMock(ex3INPUT);
  await import("./solution?ex3");
  expect(stdout()).toBe(ex3OUTPUT);
});
