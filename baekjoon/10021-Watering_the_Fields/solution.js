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
  const [N, C] = input[0].split(" ").map((c) => +c);
  const parent = Array.from({ length: N + 1 }).map((_, i) => i);
  const tree = input
    .slice(1, 1 + N)
    .map((line) => line.split(" ").map((c) => +c));

  const queue = new HeapQueue((a, b) => b[2] - a[2]);

  const find = (x) => {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent[x]));
  };

  const union = (a, b) => {
    a = find(a);
    b = find(b);
    if (a === b) return;
    parent[b] = a;
  };

  for (let i = 0; i < N - 1; ++i) {
    for (let j = i + 1; j < N; ++j) {
      const [xi, yi] = tree[i];
      const [xj, yj] = tree[j];
      const cost =
        Math.pow(Math.abs(xi - xj), 2) + Math.pow(Math.abs(yi - yj), 2);
      if (cost >= C) {
        queue.push([i, j, cost]);
      }
    }
  }

  let result = 0;
  let cnt = 0;
  while (queue.size()) {
    const [i, j, cost] = queue.pop();

    if (find(i) !== find(j)) {
      union(i, j);
      result += cost;
      ++cnt;
      if (cnt === N - 1) break;
    }
  }
  if (cnt === N - 1) console.log(result);
  else console.log(-1);
}
