import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
8
11110000
11110000
00011100
00011100
11110000
11110000
11110011
11110011
`.trim();

const ex1OUTPUT = `
((110(0101))(0010)1(0001))
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});

const ex2INPUT = `
8
11110000
11110000
11111100
11111100
11110000
11110000
11110011
11110011
`.trim();

const ex2OUTPUT = `
(1(0010)1(0001))
`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});

const ex3INPUT = `
8
11111111
11111111
11111111
11111111
11110000
11110000
11110011
11110011
`.trim();

const ex3OUTPUT = `
(111(0001))
`.trim();

test("ex3", async () => {
  const stdout = stdioMock(ex3INPUT);
  await import("./solution?ex3");
  expect(stdout()).toBe(ex3OUTPUT);
});

const ex4INPUT = `
8
11111111
11111111
11111111
11111111
11111111
11111111
11111111
11111111
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
8
11111111
11111111
01001111
10001111
11111111
11111111
11111111
11111111
`.trim();

const ex5OUTPUT = `
((11(0110)0)111)
`.trim();

test("ex5", async () => {
  const stdout = stdioMock(ex5INPUT);
  await import("./solution?ex5");
  expect(stdout()).toBe(ex5OUTPUT);
});

const ex6INPUT = `
1
0
`.trim();

const ex6OUTPUT = `
0
`.trim();

test("ex6", async () => {
  const stdout = stdioMock(ex6INPUT);
  await import("./solution?ex6");
  expect(stdout()).toBe(ex6OUTPUT);
});

const ex7INPUT = `
2
01
10
`.trim();

const ex7OUTPUT = `
(0110)
`.trim();

test("ex7", async () => {
  const stdout = stdioMock(ex7INPUT);
  await import("./solution?ex7");
  expect(stdout()).toBe(ex7OUTPUT);
});

const ex8INPUT = `
4
0000
0000
0001
0010
`.trim();

const ex8OUTPUT = `
(000(0110))
`.trim();

test("ex8", async () => {
  const stdout = stdioMock(ex8INPUT);
  await import("./solution?ex8");
  expect(stdout()).toBe(ex8OUTPUT);
});

const ex9INPUT = `
4
0000
0000
0100
1000
`.trim();

const ex9OUTPUT = `
(00(0110)0)
`.trim();

test("ex9", async () => {
  const stdout = stdioMock(ex9INPUT);
  await import("./solution?ex9");
  expect(stdout()).toBe(ex9OUTPUT);
});

const ex10INPUT = `
4
0111
1011
0111
1010
`.trim();

const ex10OUTPUT = `
((0110)1(0110)(1110))
`.trim();

test("ex10", async () => {
  const stdout = stdioMock(ex10INPUT);
  await import("./solution?ex10");
  expect(stdout()).toBe(ex10OUTPUT);
});

const ex11INPUT = `
8
01110111
10111011
01110111
10101010
01110111
10111011
01110111
10101010
`.trim();

const ex11OUTPUT = `
(((0110)1(0110)(1110))((0110)1(0110)(1110))((0110)1(0110)(1110))((0110)1(0110)(1110)))
`.trim();

test("ex11", async () => {
  const stdout = stdioMock(ex11INPUT);
  await import("./solution?ex11");
  expect(stdout()).toBe(ex11OUTPUT);
});

const ex12INPUT = `
8
11111111
11111111
11111111
11111111
11111111
11111111
11111111
11110000
`.trim();

const ex12OUTPUT = `
(111(11(1100)(1100)))
`.trim();

test("ex12", async () => {
  const stdout = stdioMock(ex12INPUT);
  await import("./solution?ex12");
  expect(stdout()).toBe(ex12OUTPUT);
});
