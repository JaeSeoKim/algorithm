import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
5 2
1 4 2 5 1
`.trim();

const ex1OUTPUT = `
7
1
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});

const ex2INPUT = `
7 5
1 1 1 1 1 5 1
`.trim();

const ex2OUTPUT = `
9
2
`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});

const ex3INPUT = `
5 3
0 0 0 0 0
`.trim();

const ex3OUTPUT = `
SAD
`.trim();

test("ex3", async () => {
  const stdout = stdioMock(ex3INPUT);
  await import("./solution?ex3");
  expect(stdout()).toBe(ex3OUTPUT);
});

const ex4INPUT = `
5 5
1 2 3 4 5
`.trim();

const ex4OUTPUT = `
15
1
`.trim();

test("ex4", async () => {
  const stdout = stdioMock(ex4INPUT);
  await import("./solution?ex4");
  expect(stdout()).toBe(ex4OUTPUT);
});
