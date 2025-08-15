// Divide and conquer algorithm - Quick Sort

/**
 * Main quicksort function that sorts an array using the divide-and-conquer approach
 * @param arr - Array to be sorted
 * @param low - Starting index of the partition (default: 0)
 * @param high - Ending index of the partition (default: arr.length - 1)
 * @returns The sorted array
 */
export function quickSort(
  arr: number[],
  low: number = 0,
  high: number = arr.length - 1
): number[] {
  // this is termination condition (array of 0 or 1 element are sorted)
  if (low < high) {
    // partition = operation consisting in setting pivot at its final place
    // and all elements before are smaller, all elements after are greater than pivot
    const pivotIndex = partition(arr, low, high);

    // [ elements < pivot, pivot, elements > pivot ] and returns pivot index

    // recursively calling quickSort to partition left and right, ignoring pivot (already placed)
    quickSort(arr, low, pivotIndex - 1);

    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

/**
 * Partitions the array around a pivot element
 * @param arr - Array to partition
 * @param low - Starting index of the partition
 * @param high - Ending index of the partition
 * @returns Index of the pivot after partitioning
 */
export function partition(arr: number[], low: number, high: number): number {
  const pivotIndex = choosePivot(arr, low, high);
  const pivotValue = arr[pivotIndex];

  // move pivot to end of array
  swap(arr, pivotIndex, high);

  let j = low;

  // placing all elements smaller than pivot to left
  for (let i = low; i < high; i++) {
    if (arr[i] <= pivotValue) {
      swap(arr, i, j);
      j++;
    }
  }

  // move back pivot
  swap(arr, pivotIndex, j);

  return j;
}

/**
 * Chooses a pivot element for partitioning
 * @param arr - Array to choose pivot from
 * @param low - Starting index
 * @param high - Ending index
 * @returns Index of the chosen pivot
 */
export function choosePivot(arr: number[], low: number, high: number): number {
  // last element as pivot
  return high;
}

/**
 * Swaps two elements in an array
 * @param arr - Array containing the elements
 * @param i - Index of first element
 * @param j - Index of second element
 */
export function swap(arr: number[], i: number, j: number): void {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(quickSort([1, 7, 5, 4]));
}
