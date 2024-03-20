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
  const N = +input.splice(0, 1)[0];
  const W = input.splice(0, N).map((line) => line.split(" ").map((c) => +c));

  const outOfTarget = (() => {
    let outOfTarget = 0;
    for (let i = 0; i < N; ++i) {
      outOfTarget |= 1 << i;
    }
    return outOfTarget;
  })();

  const dp = Array.from({ length: outOfTarget + 1 }).map(() => new Array(N));

  function find(visited, index) {
    if (dp[visited][index]) return dp[visited][index];
    if (visited === outOfTarget)
      return (dp[visited][index] = W[index][0] || Number.MAX_SAFE_INTEGER);

    let ret = Number.MAX_SAFE_INTEGER;

    for (let next = 0; next < N; ++next) {
      if (
        next === index ||
        W[index][next] === 0 ||
        (visited & (1 << next)) !== 0
      )
        continue;

      ret = Math.min(ret, find(visited | (1 << next), next) + W[index][next]);
    }
    return (dp[visited][index] = ret);
  }

  console.log(find(1, 0));
}
