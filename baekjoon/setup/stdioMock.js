import { vi } from "vitest";
import { afterEach } from "vitest";
import fs from "node:fs";
import readline from "node:readline";

/**
 * 입출력 mock 함수
 *
 * @param {string} stdin stdin으로 입력할 값
 * @returns {() => string} 출력값 가져오는 함수
 */
export const stdioMock = (stdin) => {
  const stdinLines = stdin.split("\n");
  const readlineSpy = vi
    .spyOn(readline, "createInterface")
    .mockImplementation(function () {
      return {
        on: function (action, callback) {
          if (action === "line") {
            while (stdinLines.length) {
              callback(stdinLines.shift());
            }
          }
          if (action === "close") {
            callback();
          }
          return this;
        },
      };
    });

  const readFileSyncSpy = vi
    .spyOn(fs, "readFileSync")
    .mockImplementation(() => stdin);

  const logSpy = vi.spyOn(console, "log");

  afterEach(() => {
    readlineSpy.mockRestore();
    readFileSyncSpy.mockRestore();
    logSpy.mockRestore();
  });

  return () => logSpy.mock.calls.map((call) => call.join(" ")).join("\n");
};
