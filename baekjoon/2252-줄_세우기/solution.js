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
  const [N, M] = input[0].split(" ").map((c) => +c);
  const arr = Array.from({ length: N + 1 }).map(() => []);
  const degree = new Array(N + 1).fill(0);

  input.slice(1, 1 + M).forEach((line) => {
    const [a, b] = line.split(" ");
    arr[a].push(b);
    ++degree[b];
  });

  const topologySort = () => {
    const answer = [];
    const queue = [];

    degree.forEach((v, i) => {
      if (i !== 0 && v === 0) {
        queue.push(i);
      }
    });

    while (queue.length) {
      const target = queue.shift();
      answer.push(target);

      for (let n of arr[target]) {
        --degree[n];
        if (degree[n] === 0) {
          queue.push(n);
        }
      }
    }
    return answer;
  };

  console.log(topologySort().join(" "));
}
