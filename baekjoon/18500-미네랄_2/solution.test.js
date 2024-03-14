import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
5 6
......
..xx..
..x...
..xx..
.xxxx.
1
3`.trim();

const ex1OUTPUT = `
......
......
..xx..
..xx..
.xxxx.`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});

const ex2INPUT = `
8 8
........
........
...x.xx.
...xxx..
..xxx...
..x.xxx.
..x...x.
.xxx..x.
5
6 6 4 3 1`.trim();

const ex2OUTPUT = `
........
........
........
........
.....x..
..xxxx..
..xxx.x.
..xxxxx.`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});

const ex3INPUT = `
7 6
......
......
xx....
.xx...
..xx..
...xx.
....x.
2
6 4`.trim();

const ex3OUTPUT = `
......
......
......
......
..xx..
xx.xx.
.x..x.`.trim();

test("ex3", async () => {
  const stdout = stdioMock(ex3INPUT);
  await import("./solution?ex3");
  expect(stdout()).toBe(ex3OUTPUT);
});

const ex4INPUT = `
5 6
xxxxxx
x...xx
...xx.
..xx..
...x..
1
1
`.trim();

const ex4OUTPUT = `
......
xxxxxx
x...xx
...xx.
..xx..
`.trim();

test("ex4", async () => {
  const stdout = stdioMock(ex4INPUT);
  await import("./solution?ex4");
  expect(stdout()).toBe(ex4OUTPUT);
});

const ex5INPUT = `
14 11
xxxxxxxxxxx
x.x.x.x.x.x
x.x.x.x.x.x
x.x.x.x.x.x
x...x.x.x.x
x.....x...x
x.....x....
x..........
x.........x
x.........x
xxxxxxxxxxx
.....x.....
.....x.....
.....x.....
2
4 2
`.trim();

const ex5OUTPUT = `
...........
...........
...........
xxxxxxxxxxx
x.x.x.x.x.x
x.x.x.x.x.x
x.x.x.x.x.x
x...x.x.x.x
x.....x...x
x.....x...x
x.........x
xxxxxxxxxxx
x....x.....
.....x.....
`.trim();

test("ex5", async () => {
  const stdout = stdioMock(ex5INPUT);
  await import("./solution?ex5");
  expect(stdout()).toBe(ex5OUTPUT);
});
