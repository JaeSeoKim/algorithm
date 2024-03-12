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
  const [N, S] = input[0].split(" ").map((c) => +c);
  const vals = input[1].split(" ").map((c) => +c);

  let result = Number.MAX_VALUE;
  let left = 0;
  let right = 0;
  let sum = vals[0];
  while (right !== N) {
    if (sum < S) {
      ++right;
      sum += vals[right];
    } else {
      sum -= vals[left];
      result = Math.min(right - left + 1, result);
      ++left;
    }
  }

  if (result === Number.MAX_VALUE) console.log(0);
  else console.log(result);
}
