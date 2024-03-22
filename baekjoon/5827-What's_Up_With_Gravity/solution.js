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
  const dx = [1, -1];

  const [N, M] = input
    .splice(0, 1)[0]
    .split(" ")
    .map((c) => +c);
  let position;
  const map = input.splice(0, N).map((line, i) =>
    line.split("").map((c, j) => {
      if (c === "C") {
        position = [j, i];
        return ".";
      }
      return c;
    })
  );

  function calcuratePositionWithGravity(x, y, gravity) {
    while (0 <= y && y < N) {
      if (map[y][x] === "D") {
        return [x, y];
      }
      if (map[y][x] === "#") {
        return [x, y - gravity];
      }
      y += gravity;
    }
    return null;
  }

  let ret = Infinity;
  const queue = [[0, 1, ...position]];
  const dp = Array.from({ length: 2 }).map(() =>
    Array.from({ length: N }).map(() =>
      Array.from({ length: M }).map(() => Infinity)
    )
  );

  while (queue.length) {
    const data = queue.pop();
    const cnt = data[0];
    const gravity = data[1];

    const position = calcuratePositionWithGravity(data[2], data[3], gravity);
    if (!position) continue;
    const [x, y] = position;

    const gravityIndex = gravity === 1 ? 0 : 1;

    if (dp[gravityIndex][y][x] <= cnt) continue;
    dp[gravityIndex][y][x] = cnt;

    if (map[y][x] === "D") {
      ret = Math.min(cnt, ret);
      continue;
    }

    for (let i = 0; i < 2; ++i) {
      const nx = x + dx[i];

      if (0 <= nx && nx < M && map[y][nx] !== "#") {
        queue.push([cnt, gravity, nx, y]);
      }
    }

    queue.unshift([cnt + 1, -gravity, x, y]);
  }
  console.log(ret === Infinity ? -1 : ret);
}
