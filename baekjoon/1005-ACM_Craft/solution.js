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
  let T = +input.splice(0, 1)[0];
  const result = [];

  while (T--) {
    const [N, K] = input
      .splice(0, 1)[0]
      .split(" ")
      .map((c) => +c);
    const delayArr = [0].concat(
      input
        .splice(0, 1)[0]
        .split(" ")
        .map((c) => +c)
    );
    const constructArr = Array.from({ length: N + 1 }).map(() => []);
    const constructDegree = Array.from({ length: N + 1 }).map(() => 0);
    input.splice(0, K).forEach((line) => {
      const [x, y] = line.split(" ").map((c) => +c);
      constructArr[x].push(y);
      ++constructDegree[y];
    });
    const W = +input.splice(0, 1)[0];

    const time = Array.from({ length: N + 1 }).map(() => 0);
    const queue = [];

    for (let i = 1; i <= N; ++i) {
      if (constructDegree[i] === 0) {
        time[i] = delayArr[i];
        queue.push(i);
      }
    }

    while (queue.length) {
      const current = queue.shift();

      for (let next of constructArr[current]) {
        time[next] = Math.max(time[next], time[current] + delayArr[next]);
        --constructDegree[next];
        if (constructDegree[next] === 0) {
          queue.push(next);
        }
      }
      if (current === W) {
        break;
      }
    }
    result.push(time[W]);
  }
  console.log(result.join("\n"));
}
