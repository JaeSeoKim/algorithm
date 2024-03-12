import { describe } from "vitest";
import { it } from "vitest";
import { HeapQueue } from "./HeapQueue";
import { expect } from "vitest";

describe("빈 HeapQueue<number>에", async () => {
  const queue = new HeapQueue((a, b) => a - b);

  it("5를 push한다", async () => {
    queue.push(5);

    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe(5);
    expect(queue.heap).toStrictEqual([5]);
  });

  it("10를 push한다", async () => {
    queue.push(10);

    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe(10);
    expect(queue.heap).toStrictEqual([10, 5]);
  });

  it("3를 push한다", async () => {
    queue.push(3);

    expect(queue.size()).toBe(3);
    expect(queue.peek()).toBe(10);
    expect(queue.heap).toStrictEqual([10, 5, 3]);
  });

  it("10를 push한다", async () => {
    queue.push(10);

    expect(queue.size()).toBe(4);
    expect(queue.peek()).toBe(10);
    expect(queue.heap).toStrictEqual([10, 10, 3, 5]);
  });

  it("pop한다", async () => {
    const data = queue.pop();

    expect(queue.size()).toBe(3);
    expect(data).toBe(10);
    expect(queue.peek()).toBe(10);
  });

  it("pop한다", async () => {
    const data = queue.pop();

    expect(queue.size()).toBe(2);
    expect(data).toBe(10);
    expect(queue.peek()).toBe(5);
  });

  it("pop한다", async () => {
    const data = queue.pop();

    expect(queue.size()).toBe(1);
    expect(data).toBe(5);
    expect(queue.peek()).toBe(3);
  });
});
