import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
5 4
XX.S
.S..
SXSS
S.SX
..SX
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
3 5
XSXSX
..S..
..X..
`.trim();

const ex2OUTPUT = `
4
`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});

const ex3INPUT = `
3 5
XSXSX
XSXSX
XXXSX
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
5 5
XSXSX
SXSXS
XSXSX
SXSXS
XSXSX
`.trim();

const ex4OUTPUT = `
12
`.trim();

test("ex4", async () => {
  const stdout = stdioMock(ex4INPUT);
  await import("./solution?ex4");
  expect(stdout()).toBe(ex4OUTPUT);
});

const ex5INPUT = `
5 5
.....
.....
..X..
.....
.....
`.trim();

const ex5OUTPUT = `
0
`.trim();

test("ex5", async () => {
  const stdout = stdioMock(ex5INPUT);
  await import("./solution?ex5");
  expect(stdout()).toBe(ex5OUTPUT);
});

const ex6INPUT = `
10 10
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
`.trim();

const ex6OUTPUT = `
0
`.trim();

test("ex6", async () => {
  const stdout = stdioMock(ex6INPUT);
  await import("./solution?ex6");
  expect(stdout()).toBe(ex6OUTPUT);
});
