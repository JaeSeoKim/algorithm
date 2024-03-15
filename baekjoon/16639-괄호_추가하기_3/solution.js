const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * @type {string[]}
 */
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution();
});

function solution() {
  const N = +input[0];
  const expression = input[1];

  const maxDp = Array.from({ length: N }).map(() => new Array(N));
  const minDp = Array.from({ length: N }).map(() => new Array(N));

  for (let i = 0; i < N; i += 2) {
    minDp[i][i] = +expression[i];
    maxDp[i][i] = +expression[i];
  }

  const MIN_VALUE = -(2 ** 31);
  const MAX_VALUE = 2 ** 31;

  const dp = (start, end) => {
    if (typeof minDp[start][end] !== "undefined") {
      return {
        min: minDp[start][end],
        max: maxDp[start][end],
      };
    }

    let min = MAX_VALUE;
    let max = MIN_VALUE;

    const calc = (operater, a, b) => {
      const result = (() => {
        switch (operater) {
          case "+":
            return a + b;
          case "-":
            return a - b;
          case "*":
            return a * b;
        }
      })();

      min = Math.min(min, result);
      max = Math.max(max, result);
    };

    for (let i = start; i < end; i += 2) {
      const front = dp(start, i);
      const back = dp(i + 2, end);

      const operater = expression[i + 1];

      calc(operater, front.min, back.min);
      calc(operater, front.min, back.max);
      calc(operater, front.max, back.max);
      calc(operater, front.max, back.min);
    }

    minDp[start][end] = min;
    maxDp[start][end] = max;

    return { min, max };
  };

  dp(0, N - 1);
  console.log(maxDp[0][N - 1]);
}
