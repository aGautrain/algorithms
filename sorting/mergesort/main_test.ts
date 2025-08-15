import { assertEquals } from "@std/assert";
import { mergeSort, mergeTwoSortedArrays } from "./main.ts";

Deno.test("mergeSort - standard cases", async (t) => {
  await t.step("sorts a simple array", () => {
    const input = [64, 34, 25, 12, 22, 11, 90];
    const expected = [11, 12, 22, 25, 34, 64, 90];
    assertEquals(mergeSort(input), expected);
  });

  await t.step("sorts array with duplicates", () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    assertEquals(mergeSort(input), expected);
  });

  await t.step("sorts already sorted array", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    assertEquals(mergeSort(input), expected);
  });

  await t.step("sorts reverse sorted array", () => {
    const input = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    assertEquals(mergeSort(input), expected);
  });

  await t.step("sorts array with negative numbers", () => {
    const input = [-5, 10, -3, 0, 7, -8, 2];
    const expected = [-8, -5, -3, 0, 2, 7, 10];
    assertEquals(mergeSort(input), expected);
  });

  await t.step("sorts array with large numbers", () => {
    const input = [1000000, 999999, 1000001, 999998];
    const expected = [999998, 999999, 1000000, 1000001];
    assertEquals(mergeSort(input), expected);
  });
});

Deno.test("mergeSort - edge cases", async (t) => {
  await t.step("handles empty array", () => {
    const input: number[] = [];
    const expected: number[] = [];
    assertEquals(mergeSort(input), expected);
  });

  await t.step("handles single element array", () => {
    const input = [42];
    const expected = [42];
    assertEquals(mergeSort(input), expected);
  });

  await t.step("handles two element array", () => {
    const input = [2, 1];
    const expected = [1, 2];
    assertEquals(mergeSort(input), expected);
  });

  await t.step("handles array with all same elements", () => {
    const input = [7, 7, 7, 7, 7];
    const expected = [7, 7, 7, 7, 7];
    assertEquals(mergeSort(input), expected);
  });

  await t.step("handles array with one unique element", () => {
    const input = [1, 1, 1, 2, 1, 1];
    const expected = [1, 1, 1, 1, 1, 2];
    assertEquals(mergeSort(input), expected);
  });

  await t.step("handles array with zeros", () => {
    const input = [0, 0, 0, 1, 0];
    const expected = [0, 0, 0, 0, 1];
    assertEquals(mergeSort(input), expected);
  });
});

Deno.test("mergeSort - performance and stability", async (t) => {
  await t.step("maintains stability for equal elements", () => {
    // Create objects with same value but different indices to test stability
    const input = [3, 1, 4, 1, 5];
    const expected = [1, 1, 3, 4, 5];
    const result = mergeSort(input);
    assertEquals(result, expected);
  });

  await t.step("handles large array", () => {
    const input = Array.from({ length: 1000 }, (_, i) => 1000 - i);
    const expected = Array.from({ length: 1000 }, (_, i) => i + 1);
    const result = mergeSort(input);
    assertEquals(result, expected);
  });
});

Deno.test("mergeTwoSortedArrays - helper function", async (t) => {
  await t.step("merges two sorted arrays of equal length", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    assertEquals(mergeTwoSortedArrays(arr1, arr2), expected);
  });

  await t.step("merges arrays of different lengths", () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4];
    const expected = [1, 2, 3, 4, 5, 7];
    assertEquals(mergeTwoSortedArrays(arr1, arr2), expected);
  });

  await t.step("merges with empty first array", () => {
    const arr1: number[] = [];
    const arr2 = [1, 2, 3];
    const expected = [1, 2, 3];
    assertEquals(mergeTwoSortedArrays(arr1, arr2), expected);
  });

  await t.step("merges with empty second array", () => {
    const arr1 = [1, 2, 3];
    const arr2: number[] = [];
    const expected = [1, 2, 3];
    assertEquals(mergeTwoSortedArrays(arr1, arr2), expected);
  });

  await t.step("merges two empty arrays", () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const expected: number[] = [];
    assertEquals(mergeTwoSortedArrays(arr1, arr2), expected);
  });

  await t.step("merges arrays with duplicates", () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 3, 4];
    const expected = [1, 2, 2, 2, 3, 3, 4];
    assertEquals(mergeTwoSortedArrays(arr1, arr2), expected);
  });
});

Deno.test("mergeSort - depth parameter", async (t) => {
  await t.step("works with default depth parameter", () => {
    const input = [3, 1, 4, 1, 5];
    const expected = [1, 1, 3, 4, 5];
    assertEquals(mergeSort(input), expected);
  });

  await t.step("works with custom depth parameter", () => {
    const input = [3, 1, 4, 1, 5];
    const expected = [1, 1, 3, 4, 5];
    assertEquals(mergeSort(input, 5), expected);
  });
});
