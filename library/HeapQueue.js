/**
 *  @typeParam T - 저장할 객체
 */
export class HeapQueue {
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
