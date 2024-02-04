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
1 3 4 6
2 2 5
1 1 3 -2
2 2 5
`.trim();

const ex1OUTPUT = `
26
22
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});

const ex2INPUT = `
5 2 3
1
2
3
4
5
1 1 5 1
2 1 5
2 2 2
1 1 5 -1
2 1 1
`.trim();

const ex2OUTPUT = `
20
3
1
`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});

const ex3INPUT = `
5 2 3
2
3
4
5
6
2 1 5
2 2 2
1 1 5 -1
2 2 2
`.trim();

const ex3OUTPUT = `
20
3
2
`.trim();

test("ex3", async () => {
  const stdout = stdioMock(ex3INPUT);
  await import("./solution?ex3");
  expect(stdout()).toBe(ex3OUTPUT);
});
