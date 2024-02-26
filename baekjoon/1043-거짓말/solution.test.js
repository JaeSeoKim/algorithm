import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
4 3
0
2 1 2
1 3
3 2 3 4
`.trim();

const ex1OUTPUT = `
3
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});

const ex2INPUT = `
4 1
1 1
4 1 2 3 4
`.trim();

const ex2OUTPUT = `
0
`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});

const ex3INPUT = `
4 1
0
4 1 2 3 4
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
4 5
1 1
1 1
1 2
1 3
1 4
2 4 1
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
10 9
4 1 2 3 4
2 1 5
2 2 6
1 7
1 8
2 7 8
1 9
1 10
2 3 10
1 4
`.trim();

const ex5OUTPUT = `
4
`.trim();

test("ex5", async () => {
  const stdout = stdioMock(ex5INPUT);
  await import("./solution?ex5");
  expect(stdout()).toBe(ex5OUTPUT);
});

const ex6INPUT = `
8 5
3 1 2 7
2 3 4
1 5
2 5 6
2 6 8
1 8
`.trim();

const ex6OUTPUT = `
5
`.trim();

test("ex6", async () => {
  const stdout = stdioMock(ex6INPUT);
  await import("./solution?ex6");
  expect(stdout()).toBe(ex6OUTPUT);
});

const ex7INPUT = `
3 4
1 3
1 1
1 2
2 1 2
3 1 2 3
`.trim();

const ex7OUTPUT = `
0
`.trim();

test("ex7", async () => {
  const stdout = stdioMock(ex7INPUT);
  await import("./solution?ex7");
  expect(stdout()).toBe(ex7OUTPUT);
});
