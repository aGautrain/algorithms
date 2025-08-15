// Divide and conquer algorithm

export function mergeSort(arr: number[], depth: number = 0): number[] {
  console.debug(`depth #${depth} - ${arr.join(", ")}`);

  // termination conditions
  if (arr.length <= 1) return arr; // empty and one-element array always sorted
  if (arr.length === 2) return mergeTwoSortedArrays([arr[0]], [arr[1]]);

  // calculating middle of array
  const half = arr.length / 2; // will be an integer because of how javascript divide operator works

  // dividing problem
  const arr1 = arr.slice(0, half);
  const arr2 = arr.slice(half);

  // recursivity
  return mergeTwoSortedArrays(
    mergeSort(arr1, depth + 1),
    mergeSort(arr2, depth + 1)
  );
}

// conquer
export function mergeTwoSortedArrays(arr1: number[], arr2: number[]) {
  let i = 0,
    j = 0;
  let result: number[] = [];

  // building a result array with each element of arr1 and arr2
  while (result.length < arr1.length + arr2.length) {
    if (i === arr1.length) {
      // arr1 cursor complete, adding all arr2 resting elements
      result = [...result, ...arr2.slice(j)];
    } else if (j === arr2.length) {
      // arr2 cursor complete, adding all arr1 resting elements
      result = [...result, ...arr1.slice(i)];
    } else {
      // standard case, comparing arr1 and arr2 elements at their respective cursors
      const element1 = arr1[i],
        element2 = arr2[j];

      if (element1 <= element2) {
        i++;
        result = [...result, element1];
      } else {
        j++;
        result = [...result, element2];
      }
    }
  }

  return result;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(mergeSort([1, 7, 5, 4]));
}
