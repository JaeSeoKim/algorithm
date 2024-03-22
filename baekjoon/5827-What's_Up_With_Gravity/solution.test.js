import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
5 5
#####
#...#
#...D
#C...
##.##
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
5 5
#####
#...#
#.#D#
#C###
#####
`.trim();

const ex2OUTPUT = `
2
`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});

const ex3INPUT = `
5 5
#####
#C..D
#.###
#.###
#.###
`.trim();

const ex3OUTPUT = `
-1
`.trim();

test("ex3", async () => {
  const stdout = stdioMock(ex3INPUT);
  await import("./solution?ex3");
  expect(stdout()).toBe(ex3OUTPUT);
});

const ex4INPUT = `
7 7
#######
#.....#
#..#..#
#...D.#
#.....#
#C....#
#######
`.trim();

const ex4OUTPUT = `
1
`.trim();

test("ex4", async () => {
  const stdout = stdioMock(ex4INPUT);
  await import("./solution?ex4");
  expect(stdout()).toBe(ex4OUTPUT);
});

const ex5INPUT = `
6 10
##########
#....#...#
#..#...#.#
#...####.#
#C.D.....#
##.#######
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
6 4
C#D#
.#.#
.#.#
.#.#
...#
##.#
`.trim();

const ex6OUTPUT = `
1
`.trim();

test("ex6", async () => {
  const stdout = stdioMock(ex6INPUT);
  await import("./solution?ex6");
  expect(stdout()).toBe(ex6OUTPUT);
});

const ex7INPUT = `
5 5
#####
#C...
##...
.....
....D
`.trim();

const ex7OUTPUT = `
2
`.trim();

test("ex7", async () => {
  const stdout = stdioMock(ex7INPUT);
  await import("./solution?ex7");
  expect(stdout()).toBe(ex7OUTPUT);
});

const ex8INPUT = `
5 1
C
.
.
.
D
`.trim();

const ex8OUTPUT = `
0
`.trim();

test("ex8", async () => {
  const stdout = stdioMock(ex8INPUT);
  await import("./solution?ex8");
  expect(stdout()).toBe(ex8OUTPUT);
});

const ex9INPUT = `
5 1
D
.
.
C
#
`.trim();

const ex9OUTPUT = `
1
`.trim();

test("ex9", async () => {
  const stdout = stdioMock(ex9INPUT);
  await import("./solution?ex9");
  expect(stdout()).toBe(ex9OUTPUT);
});
