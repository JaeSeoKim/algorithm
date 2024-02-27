const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLength = () => {
    return this.heap.length;
  };

  push = (node) => {
    let i = this.heap.push(node) - 1;
    let parentI = Math.floor((i - 1) / 2);
    while (i > 0 && this.heap[parentI] > this.heap[i]) {
      this.swap(i, parentI);
      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  };

  pop = () => {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      const leftI = i * 2 + 1,
        rightI = i * 2 + 2;
      if (leftI >= this.heap.size) {
        break;
      }
      let nextI = i;
      if (this.heap[nextI] > this.heap[leftI]) {
        nextI = leftI;
      }
      if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
        nextI = rightI;
      }
      if (nextI === i) {
        break;
      }
      this.swap(i, nextI);
      i = nextI;
    }
    return result;
  };

  swap = (a, b) => {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  };
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
  const [N, M] = input
    .splice(0, 1)[0]
    .split(" ")
    .map((c) => +c);
  const arr = Array.from({ length: N + 1 }).map(() => []);
  const degree = new Array(N + 1).fill(0);

  input.splice(0, M).forEach((line) => {
    const [a, b] = line.split(" ").map((c) => +c);
    arr[a].push(b);
    ++degree[b];
  });

  const answer = [];
  const queue = new MinHeap();

  for (let i = 1; i <= N; ++i) {
    if (degree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.getLength()) {
    const current = queue.pop();
    answer.push(current);

    for (let a of arr[current]) {
      --degree[a];
      if (degree[a] === 0) {
        queue.push(a);
      }
    }
  }
  console.log(answer.join(" "));
}
