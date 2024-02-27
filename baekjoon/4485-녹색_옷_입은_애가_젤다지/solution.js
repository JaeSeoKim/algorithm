const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 *  @typeParam T - 저장할 객체
 */
class HeapQueue {
  /**
   * @type {T[]}
   */
  heap;
  /**
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

  isEmpty = () => this.heap.length === 0;

  /**
   * @param {T} value
   */
  push(value) {
    let index = this.heap.push(value) - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      0 < index &&
      this._compare(this.heap[parentIndex], this.heap[index]) < 0
    ) {
      this._swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
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

    let index = 0;
    while (true) {
      let nextIndex = index;
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      if (this.heap.length > index) break;

      if (this._compare(this.heap[nextIndex], this.heap[leftIndex]) < 0) {
        nextIndex = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
        this._compare(this.heap[nextIndex], this.heap[rightIndex]) < 0
      ) {
        nextIndex = rightIndex;
      }

      if (index === nextIndex) {
        break;
      }
      this._swap(index, nextIndex);
      index = nextIndex;
    }
    return result;
  }

  /**
   * @param {number} a index
   * @param {number} b index
   */
  _swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
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
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  let cnt = 1;
  for (let N = +input.splice(0, 1)[0]; N !== 0; N = +input.splice(0, 1)[0]) {
    const map = input
      .splice(0, N)
      .map((line) => line.split(" ").map((c) => +c));
    const dist = Array.from({ length: N }).map(() =>
      new Array(N).fill(Infinity)
    );
    const queue = new HeapQueue((a, b) => {
      if (a[0] !== b[0]) return b[0] - a[0];
      return b[1] - a[1];
    });

    queue.push([0, 0]);
    dist[0][0] = map[0][0];
    while (!queue.isEmpty()) {
      const [x, y] = queue.pop();
      for (let i = 0; i < 4; ++i) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || N <= nx || ny < 0 || N <= nx) continue;

        if (dist[x][y] + map[nx][ny] < dist[nx][ny]) {
          dist[nx][ny] = dist[x][y] + map[nx][ny];
          queue.push([nx, ny]);
        }
      }
    }
    console.log(`Problem ${cnt++}: ${dist[N - 1][N - 1]}`);
  }
}
