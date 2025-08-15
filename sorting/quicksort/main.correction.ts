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
  // Base case: if array has 1 or fewer elements, it's already sorted
  if (low < high) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(arr, low, high);

    // Recursively sort the left subarray (elements < pivot)
    quickSort(arr, low, pivotIndex - 1);

    // Recursively sort the right subarray (elements > pivot)
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

/**
 * Partitions the array around a pivot element using Lomuto partition scheme
 * @param arr - Array to partition
 * @param low - Starting index of the partition
 * @param high - Ending index of the partition
 * @returns Index of the pivot after partitioning
 */
export function partition(arr: number[], low: number, high: number): number {
  // Choose pivot (using last element as pivot)
  const pivotIndex = choosePivot(arr, low, high);
  const pivotValue = arr[pivotIndex];

  // Move pivot to the end
  swap(arr, pivotIndex, high);

  // Initialize the partition index
  let partitionIndex = low;

  // Move all elements smaller than pivot to the left
  for (let i = low; i < high; i++) {
    if (arr[i] <= pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  // Move pivot to its final position
  swap(arr, partitionIndex, high);

  return partitionIndex;
}

/**
 * Chooses a pivot element for partitioning
 * @param arr - Array to choose pivot from
 * @param low - Starting index
 * @param high - Ending index
 * @returns Index of the chosen pivot
 */
export function choosePivot(arr: number[], low: number, high: number): number {
  // Simple strategy: choose the last element as pivot
  // This is simple but can lead to O(n²) on already sorted arrays
  return high;
}

/**
 * Swaps two elements in an array
 * @param arr - Array containing the elements
 * @param i - Index of first element
 * @param j - Index of second element
 */
export function swap(arr: number[], i: number, j: number): void {
  if (i !== j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(quickSort([1, 7, 5, 4]));
}
