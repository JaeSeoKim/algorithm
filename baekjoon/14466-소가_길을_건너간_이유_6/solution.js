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
  // left, right, up, down
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const [N, K, R] = input
    .splice(0, 1)[0]
    .split(" ")
    .map((c) => +c);
  const map = Array.from({ length: N }).map(() =>
    Array.from({ length: N }).map(() => 0)
  );
  const roads = Array.from({ length: N }).map(() =>
    Array.from({ length: N }).map(() => [0, 0, 0, 0])
  );

  input.splice(0, R).forEach((line) => {
    const [r1, c1, r2, c2] = line.split(" ").map((c) => +c);
    if (r1 === r2) {
      roads[c1 - 1][r1 - 1][c1 > c2 ? 2 : 3] = 1;
      roads[c2 - 1][r2 - 1][c1 > c2 ? 3 : 2] = 1;
    } else {
      roads[c1 - 1][r1 - 1][r1 > r2 ? 0 : 1] = 1;
      roads[c2 - 1][r2 - 1][r1 > r2 ? 1 : 0] = 1;
    }
  });

  const cows = input.splice(0, K).map((line) => {
    const [r, c] = line.split(" ").map((c) => +c);
    map[c - 1][r - 1] = 1;
    return [r - 1, c - 1];
  });

  let cnt = 0;
  for (const cow of cows) {
    const visited = Array.from({ length: N }).map(() => new Array(N));
    const queue = [cow];
    --cnt;

    while (queue.length) {
      const [x, y] = queue.pop();
      if (visited[y][x]) continue;
      visited[y][x] = true;

      if (map[y][x]) ++cnt;

      for (let i = 0; i < 4; ++i) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || N <= nx || ny < 0 || N <= ny || roads[y][x][i]) continue;

        queue.push([nx, ny]);
      }
    }
  }
  console.log((K * (K - 1) - cnt) >> 1);
}
