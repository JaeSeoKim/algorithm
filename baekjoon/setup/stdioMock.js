import { vi } from "vitest";
import { afterEach } from "vitest";
import fs from "node:fs";

/**
 * 입출력 mock 함수
 *
 * @param {string} stdin stdin으로 입력할 값
 * @returns {() => string} 출력값 가져오는 함수
 */
export const stdioMock = (stdin) => {
  const readFileSyncSpy = vi
    .spyOn(fs, "readFileSync")
    .mockImplementation(() => stdin);
  const logSpy = vi.spyOn(console, "log");

  afterEach(() => {
    logSpy.mockRestore();
    readFileSyncSpy.mockRestore();
  });

  return () => logSpy.mock.calls.map((call) => call.join(" ")).join("\n");
};
