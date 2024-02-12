import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
9 8
CCTGGATTG
2 0 1 1
`.trim();

const ex1OUTPUT = `
0
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});

const ex2INPUT = `
4 2
GATA
1 0 0 1
`.trim();

const ex2OUTPUT = `
2
`.trim();

test("ex2", async () => {
  const stdout = stdioMock(ex2INPUT);
  await import("./solution?ex2");
  expect(stdout()).toBe(ex2OUTPUT);
});
