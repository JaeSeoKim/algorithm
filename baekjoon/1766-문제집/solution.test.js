import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
4 2
4 2
3 1
`.trim();

const ex1OUTPUT = `
3 1 4 2
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution?ex1");
  expect(stdout()).toBe(ex1OUTPUT);
});
