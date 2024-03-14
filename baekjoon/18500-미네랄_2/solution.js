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
  const [R, C] = input
    .splice(0, 1)[0]
    .split(" ")
    .map((c) => +c);
  const map = input.splice(0, R).map((line) => line.split(""));
  const N = +input.splice(0, 1)[0];
  const heights = input[0].split(" ").map((c) => R - +c);

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const checkPosition = (x, y) => x < 0 || C <= x || y < 0 || R <= y;

  const down = (cluster) => {
    let isFinish = false;
    while (!isFinish) {
      cluster.sort(([_ax, ay], [_bx, by]) => by - ay);
      for (let i = 0; i < cluster.length; ++i) {
        const [x, y] = cluster[i];
        map[y][x] = ".";
        if (y + 1 >= R || map[y + 1][x] === "x") {
          isFinish = true;
        }
      }
      for (let i = 0; i < cluster.length; ++i) {
        const [x, y] = cluster[i];
        cluster[i] = [x, y + 1];
        if (isFinish) map[y][x] = "x";
        else map[y + 1][x] = "x";
      }
    }
  };

  const findCluster = (x, y) => {
    const visited = Array.from({ length: R }).map(() =>
      Array.from({ length: C }).map(() => false)
    );
    const queue = [[x, y]];

    const _find = (x, y) => {
      const cluster = [[x, y]];
      const queue = [[x, y]];

      let isBottom = false;

      while (queue.length) {
        const [x, y] = queue.pop();

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (checkPosition(nx, ny) || visited[ny][nx] || map[ny][nx] === ".")
            continue;

          if (ny === R - 1) {
            isBottom = true;
          }

          queue.push([nx, ny]);
          visited[ny][nx] = true;
          cluster.push([nx, ny]);
        }
      }
      if (isBottom) return [];
      return cluster;
    };

    while (queue.length) {
      const [x, y] = queue.pop();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (checkPosition(nx, ny) || visited[ny][nx]) continue;
        queue.push([nx, ny]);
        visited[ny][nx] = true;
        if (ny !== R - 1 && map[ny][nx] === "x") {
          const cluster = _find(nx, ny);
          if (cluster.length) {
            down(cluster);
            return;
          }
        }
      }
    }
  };

  heights.forEach((height, index) => {
    const isStartLeft = index % 2 === 0;
    for (
      let i = isStartLeft ? 0 : C - 1;
      isStartLeft ? i < C : 0 <= i;
      isStartLeft ? ++i : --i
    ) {
      if (map[height][i] === "x") {
        map[height][i] = ".";
        findCluster(i, height);
        return;
      }
    }
  });

  console.log(map.map((row) => row.join("")).join("\n"));
}
