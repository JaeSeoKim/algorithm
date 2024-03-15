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

        if (!(this._compare(this.heap[parentIndex], this.heap[index]) < 0))
          break;

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

  const [N, P, K] = input[0].split(" ").map((c) => +c);
  const tree = Array.from({ length: N }).map(() => []);

  input.slice(1, P + 1).forEach((line) => {
    const [start, end, price] = line.split(" ").map((c) => +c);
    tree[start - 1].push([end - 1, price]);
    tree[end - 1].push([start - 1, price]);
  });

  const dijkstra = (budget) => {
    const distance = new Array(N).fill(Infinity);
    distance[0] = 0;
    const queue = new HeapQueue((a, b) => a[1] - b[1]);
    queue.push([0, 0]);

    while (queue.size()) {
      const [index, cost] = queue.pop();
      if (distance[index] < cost) continue;

      for (const [next, price] of tree[index]) {
        if (price > budget) {
          if (cost + 1 < distance[next]) {
            distance[next] = cost + 1;
            queue.push([next, cost + 1]);
          }
        } else {
          if (cost < distance[next]) {
            distance[next] = cost;
            queue.push([next, cost]);
          }
        }
      }
    }

    return distance[N - 1] <= K;
  };

  // 가격은 1 이상 1,000,000 이하다.
  let left = 0;
  let right = 1000001;
  let result = Infinity;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (dijkstra(mid)) {
      right = mid - 1;
      result = mid;
    } else {
      left = mid + 1;
    }
  }
  if (result === Infinity) console.log(-1);
  else console.log(result);
}
