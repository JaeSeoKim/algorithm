const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class HeapQueue {
  /**
   * @type {T[]}
   */
  heap;
  /**
   * 비교 연산을 수행할 함수 생성자를 통해 받음
   *
   * @type {{(a:T, b:T) => number}}
   */
  _compare;

  /**
   * @param {(a:T, b:T) => number} compare
   */
  constructor(compare = (a, b) => a - b) {
    this.heap = [];
    this._compare = compare;
  }

  size = () => this.heap.length;

  /**
   * @returns {T | null}
   */
  peek() {
    if (this.heap.length) return this.heap[0];
    return null;
  }

  /**
   * @param {T} value
   */
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = (index - 1) >> 1;

      if (!(this._compare(this.heap[parentIndex], this.heap[index]) < 0)) break;

      this._swap(index, parentIndex);
      index = parentIndex;
    }
  }

  /**
   * @returns {T}
   */
  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.bubbleDown();
    return result;
  }

  bubbleDown() {
    let index = 0;

    while (index < this.heap.length) {
      let nextIndex = index;
      const leftIndex = (index << 1) + 1;
      const rightIndex = leftIndex + 1;

      if (
        leftIndex < this.heap.length &&
        this._compare(this.heap[nextIndex], this.heap[leftIndex]) < 0
      ) {
        nextIndex = leftIndex;
      }

      if (
        rightIndex < this.heap.length &&
        this._compare(this.heap[nextIndex], this.heap[rightIndex]) < 0
      ) {
        nextIndex = rightIndex;
      }

      if (nextIndex === index) return;

      this._swap(index, nextIndex);
      index = nextIndex;
    }
  }

  /**
   * @param {number} a index
   * @param {number} b index
   */
  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

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
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const [R, C] = input
    .splice(0, 1)[0]
    .split(" ")
    .map((c) => +c);
  const map = Array.from({ length: R }).map(() => new Array(C));
  let N = 0;
  const islands = [];

  input.splice(0, R).forEach((line, y) =>
    line.split("").forEach((value, x) => {
      if (value === "X") {
        if (0 < y && !"S.".includes(map[y - 1][x])) {
          return (map[y][x] = map[y - 1][x]);
        }
        if (0 < x && !"S.".includes(map[y][x - 1])) {
          return (map[y][x] = map[y][x - 1]);
        }
        islands.push([x, y]);
        return (map[y][x] = N++);
      }
      map[y][x] = value;
    })
  );

  const distanceMap = Array.from({ length: N }).map((_, i) =>
    Array.from({ length: N }).map((_, j) =>
      i === j ? 0 : Number.MAX_SAFE_INTEGER
    )
  );

  islands.forEach(([x, y], from) => {
    const check = Array.from({ length: R }).map(() => new Array(C));
    const queue = new HeapQueue((a, b) => b[0] - a[0]);
    queue.push([0, x, y]);

    while (queue.size()) {
      const [distance, x, y] = queue.pop();

      if (typeof check[y][x] !== "undefined" && check[y][x] <= distance)
        continue;

      check[y][x] = distance;

      if (typeof map[y][x] === "number") {
        distanceMap[from][map[y][x]] = Math.min(
          distanceMap[from][map[y][x]],
          distance
        );
      }

      for (let i = 0; i < 4; ++i) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (!checkPosition(nx, ny) || map[ny][nx] === ".") continue;

        queue.push([distance + (map[ny][nx] === "S" ? 1 : 0), nx, ny]);
      }
    }
  });

  function checkPosition(x, y) {
    return 0 <= x && x < C && 0 <= y && y < R;
  }

  const outMark = (() => {
    let outMark = 0;
    Array.from({ length: N }).forEach((_, i) => (outMark |= 1 << i));
    return outMark;
  })();

  const dp = Array.from({ length: outMark + 1 }).map(() =>
    Array.from({ length: N }).map(() => 0)
  );

  function find(visited, index) {
    if (index !== -1 && dp[visited][index] !== 0) return dp[visited][index];
    if (visited === outMark) return dp[visited][index];

    let ret = Number.MAX_SAFE_INTEGER;

    for (let next = 0; next < N; ++next) {
      if (index === next || (visited & (1 << next)) != 0) continue;
      ret = Math.min(
        ret,
        find(visited | (1 << next), next) +
          (index === -1 ? 0 : distanceMap[index][next])
      );
    }

    return (dp[visited][index] = ret);
  }

  console.log(find(0, -1));
}
