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

exports.HeapQueue = HeapQueue;
