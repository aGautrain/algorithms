import { assertEquals } from "@std/assert";
import { quickSort, partition, choosePivot, swap } from "./main.ts";

Deno.test("quickSort - standard cases", async (t) => {
  await t.step("sorts a simple array", () => {
    const input = [64, 34, 25, 12, 22, 11, 90];
    const expected = [11, 12, 22, 25, 34, 64, 90];
    assertEquals(quickSort(input), expected);
  });

  await t.step("sorts array with duplicates", () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    assertEquals(quickSort(input), expected);
  });

  await t.step("sorts already sorted array", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    assertEquals(quickSort(input), expected);
  });

  await t.step("sorts reverse sorted array", () => {
    const input = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    assertEquals(quickSort(input), expected);
  });

  await t.step("sorts array with negative numbers", () => {
    const input = [-5, 10, -3, 0, 7, -8, 2];
    const expected = [-8, -5, -3, 0, 2, 7, 10];
    assertEquals(quickSort(input), expected);
  });

  await t.step("sorts array with large numbers", () => {
    const input = [1000000, 999999, 1000001, 999998];
    const expected = [999998, 999999, 1000000, 1000001];
    assertEquals(quickSort(input), expected);
  });
});

Deno.test("quickSort - edge cases", async (t) => {
  await t.step("handles empty array", () => {
    const input: number[] = [];
    const expected: number[] = [];
    assertEquals(quickSort(input), expected);
  });

  await t.step("handles single element array", () => {
    const input = [42];
    const expected = [42];
    assertEquals(quickSort(input), expected);
  });

  await t.step("handles two element array", () => {
    const input = [2, 1];
    const expected = [1, 2];
    assertEquals(quickSort(input), expected);
  });

  await t.step("handles array with all same elements", () => {
    const input = [7, 7, 7, 7, 7];
    const expected = [7, 7, 7, 7, 7];
    assertEquals(quickSort(input), expected);
  });

  await t.step("handles array with one unique element", () => {
    const input = [1, 1, 1, 2, 1, 1];
    const expected = [1, 1, 1, 1, 1, 2];
    assertEquals(quickSort(input), expected);
  });

  await t.step("handles array with zeros", () => {
    const input = [0, 0, 0, 1, 0];
    const expected = [0, 0, 0, 0, 1];
    assertEquals(quickSort(input), expected);
  });
});

Deno.test("quickSort - performance and stability", async (t) => {
  await t.step("handles large array", () => {
    const input = Array.from({ length: 1000 }, (_, i) => 1000 - i);
    const expected = Array.from({ length: 1000 }, (_, i) => i + 1);
    const result = quickSort(input);
    assertEquals(result, expected);
  });

  await t.step("handles nearly sorted array", () => {
    const input = [1, 2, 3, 5, 4, 6, 7, 8];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    assertEquals(quickSort(input), expected);
  });
});

Deno.test("partition - helper function", async (t) => {
  await t.step("partitions array around pivot", () => {
    const arr = [3, 2, 1, 4, 5];
    const pivotIndex = partition(arr, 0, 4);
    console.log(arr);
    // After partitioning, pivot should be in its final position
    // Elements to the left should be <= pivot
    // Elements to the right should be > pivot
    assertEquals(pivotIndex, 4); // Assuming pivot is 5
  });

  await t.step("partitions array with duplicates", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const pivotIndex = partition(arr, 0, 10);
    // Pivot should be in correct position
    assertEquals(typeof pivotIndex, "number");
    assertEquals(pivotIndex >= 0 && pivotIndex < arr.length, true);
  });

  await t.step("partitions single element", () => {
    const arr = [42];
    const pivotIndex = partition(arr, 0, 0);
    assertEquals(pivotIndex, 0);
  });

  await t.step("partitions two elements", () => {
    const arr = [2, 1];
    const pivotIndex = partition(arr, 0, 1);
    assertEquals(typeof pivotIndex, "number");
  });
});

Deno.test("choosePivot - helper function", async (t) => {
  await t.step("chooses pivot from array", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const pivotIndex = choosePivot(arr, 0, 10);
    assertEquals(typeof pivotIndex, "number");
    assertEquals(pivotIndex >= 0 && pivotIndex <= 10, true);
  });

  await t.step("chooses pivot from small array", () => {
    const arr = [1, 2];
    const pivotIndex = choosePivot(arr, 0, 1);
    assertEquals(typeof pivotIndex, "number");
    assertEquals(pivotIndex >= 0 && pivotIndex <= 1, true);
  });

  await t.step("chooses pivot from single element", () => {
    const arr = [42];
    const pivotIndex = choosePivot(arr, 0, 0);
    assertEquals(pivotIndex, 0);
  });
});

Deno.test("swap - helper function", async (t) => {
  await t.step("swaps two elements", () => {
    const arr = [1, 2, 3, 4];
    swap(arr, 0, 2);
    assertEquals(arr, [3, 2, 1, 4]);
  });

  await t.step("swaps same index", () => {
    const arr = [1, 2, 3, 4];
    swap(arr, 1, 1);
    assertEquals(arr, [1, 2, 3, 4]);
  });

  await t.step("swaps adjacent elements", () => {
    const arr = [1, 2, 3, 4];
    swap(arr, 1, 2);
    assertEquals(arr, [1, 3, 2, 4]);
  });
});

Deno.test("quickSort - parameter variations", async (t) => {
  await t.step("works with default parameters", () => {
    const input = [3, 1, 4, 1, 5];
    const expected = [1, 1, 3, 4, 5];
    assertEquals(quickSort(input), expected);
  });

  await t.step("works with explicit low and high parameters", () => {
    const input = [3, 1, 4, 1, 5];
    const expected = [1, 1, 3, 4, 5];
    assertEquals(quickSort(input, 0, 4), expected);
  });

  await t.step("works with partial array range", () => {
    const input = [5, 4, 3, 2, 1];
    const expected = [5, 4, 1, 2, 3]; // Only sorting range [2,4]
    assertEquals(quickSort(input, 2, 4), expected);
  });
});
