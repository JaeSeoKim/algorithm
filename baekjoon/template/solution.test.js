import { expect } from "vitest";
import { test } from "vitest";
import { stdioMock } from "../setup/stdioMock";

const ex1INPUT = `
Hello!
`.trim();

const ex1OUTPUT = `
Hello World!
`.trim();

test("ex1", async () => {
  const stdout = stdioMock(ex1INPUT);
  await import("./solution");
  expect(stdout()).toBe(ex1OUTPUT);
});
