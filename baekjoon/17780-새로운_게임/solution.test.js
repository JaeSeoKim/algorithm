import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
4 4
0 0 2 0
0 0 1 0
0 0 1 2
0 2 0 0
2 1 1
3 2 3
2 2 1
4 1 2
`.trim();

const ex1OUTPUT = `
-1
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});

const ex2INPUT = `
4 4
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
1 1 1
1 2 1
1 3 1
1 4 1
`.trim();

const ex2OUTPUT = `
1
`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});

const ex3INPUT = `
4 4
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
1 1 1
1 2 1
1 3 1
2 4 3
`.trim();

const ex3OUTPUT = `
1
`.trim();

test("ex3", async () => {
  const stdout = stdioMock(ex3INPUT);
  await import("./solution?ex3");
  expect(stdout()).toBe(ex3OUTPUT);
});

const ex4INPUT = `
4 4
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
1 1 1
1 2 1
1 3 1
3 3 3
`.trim();

const ex4OUTPUT = `
2
`.trim();

test("ex4", async () => {
  const stdout = stdioMock(ex4INPUT);
  await import("./solution?ex4");
  expect(stdout()).toBe(ex4OUTPUT);
});

const ex5INPUT = `
4 4
0 0 2 0
0 0 1 0
0 0 1 2
0 2 0 0
2 1 1
3 2 3
2 2 1
4 1 3
`.trim();

const ex5OUTPUT = `
8
`.trim();

test("ex5", async () => {
  const stdout = stdioMock(ex5INPUT);
  await import("./solution?ex5");
  expect(stdout()).toBe(ex5OUTPUT);
});

const ex6INPUT = `
6 10
0 1 2 0 1 1
1 2 0 1 1 0
2 1 0 1 1 0
1 0 1 1 0 2
2 0 1 2 0 1
0 2 1 0 2 1
1 1 1
2 2 2
3 3 4
4 4 1
5 5 3
6 6 2
1 6 3
6 1 2
2 4 3
4 2 1
`.trim();

const ex6OUTPUT = `
9
`.trim();

test("ex6", async () => {
  const stdout = stdioMock(ex6INPUT);
  await import("./solution?ex6");
  expect(stdout()).toBe(ex6OUTPUT);
});
