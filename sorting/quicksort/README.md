# Quick Sort Algorithm

## Overview

Quick Sort is a **divide-and-conquer** sorting algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two subarrays according to whether they are less than or greater than the pivot. It has an average time complexity of **O(n log n)** and is an **in-place** sorting algorithm.

## How It Works

### 1. Choose Pivot

- Select a pivot element from the array (various strategies available)
- Common strategies: first element, last element, middle element, or random element

### 2. Partition Phase

- Rearrange the array so that all elements less than the pivot come before it
- All elements greater than the pivot come after it
- The pivot is now in its final sorted position

### 3. Recursive Phase

- Recursively apply the same steps to the subarrays on the left and right of the pivot
- Continue until all subarrays have size 1 or 0 (base case)

## Algorithm Steps

```
Input: [64, 34, 25, 12, 22, 11, 90]

Step 1: Choose Pivot (last element: 90)
[64, 34, 25, 12, 22, 11, 90]

Step 2: Partition around pivot
[64, 34, 25, 12, 22, 11] [90]

Step 3: Recursively sort subarrays
[11, 12, 22, 25, 34, 64] [90]

Step 4: Final Result
[11, 12, 22, 25, 34, 64, 90]
```

## Implementation Details

### Functions

#### `quickSort(arr: number[], low: number = 0, high: number = arr.length - 1): number[]`

- **Purpose**: Main recursive function that implements the divide-and-conquer strategy
- **Parameters**:
  - `arr`: Array to be sorted
  - `low`: Starting index of the partition (default: 0)
  - `high`: Ending index of the partition (default: arr.length - 1)
- **Returns**: Sorted array

#### `partition(arr: number[], low: number, high: number): number`

- **Purpose**: Partitions the array around a pivot element
- **Parameters**:
  - `arr`: Array to partition
  - `low`: Starting index of the partition
  - `high`: Ending index of the partition
- **Returns**: Index of the pivot after partitioning

#### `choosePivot(arr: number[], low: number, high: number): number`

- **Purpose**: Chooses a pivot element for partitioning
- **Parameters**:
  - `arr`: Array to choose pivot from
  - `low`: Starting index
  - `high`: Ending index
- **Returns**: Index of the chosen pivot

#### `swap(arr: number[], i: number, j: number): void`

- **Purpose**: Swaps two elements in an array
- **Parameters**:
  - `arr`: Array containing the elements
  - `i`: Index of first element
  - `j`: Index of second element

### Key Features

1. **In-Place Sorting**: Sorts the array without requiring additional space
2. **Recursive Implementation**: Uses divide-and-conquer approach
3. **Pivot Selection**: Configurable pivot selection strategy
4. **Efficient Partitioning**: Single-pass partitioning algorithm

## Time & Space Complexity

| Metric             | Complexity | Explanation                                                              |
| ------------------ | ---------- | ------------------------------------------------------------------------ |
| **Time (Average)** | O(n log n) | Most common case with good pivot selection                               |
| **Time (Worst)**   | O(n²)      | Occurs with poor pivot selection (already sorted/reverse sorted)         |
| **Time (Best)**    | O(n log n) | Occurs when pivot divides array into roughly equal halves                |
| **Space**          | O(log n)   | Stack space for recursion (can be optimized to O(1) with tail recursion) |

## Advantages

✅ **In-Place Algorithm**: Sorts in the original array without extra space  
✅ **Cache-Friendly**: Good locality of reference  
✅ **Efficient Average Case**: O(n log n) average time complexity  
✅ **Tail Recursion Optimizable**: Can be optimized to use constant space  
✅ **Adaptive**: Performs well on partially sorted arrays

## Disadvantages

❌ **Unstable Algorithm**: Does not preserve relative order of equal elements  
❌ **Worst Case Performance**: Can degrade to O(n²) with poor pivot selection  
❌ **Not Predictable**: Performance depends on pivot selection strategy  
❌ **Recursive Overhead**: Stack space usage for recursion

## Usage Examples

### Basic Usage

```typescript
import { quickSort } from "./main.ts";

const numbers = [64, 34, 25, 12, 22, 11, 90];
const sorted = quickSort(numbers);
console.log(sorted); // [11, 12, 22, 25, 34, 64, 90]
```

### Edge Cases

```typescript
// Empty array
quickSort([]); // []

// Single element
quickSort([42]); // [42]

// Already sorted
quickSort([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]

// Reverse sorted
quickSort([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]

// With duplicates
quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
// [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

### Partial Array Sorting

```typescript
const arr = [5, 4, 3, 2, 1];
// Sort only elements from index 1 to 3
quickSort(arr, 1, 3);
console.log(arr); // [5, 2, 3, 4, 1]
```

## Testing

Run the test suite to verify the implementation:

```bash
deno test --quiet main_test.ts
```

The tests cover:

- Standard sorting scenarios
- Edge cases (empty arrays, single elements, etc.)
- Performance with large datasets
- Helper function validation (partition, choosePivot, swap)
- Parameter variations and partial sorting

## When to Use Quick Sort

**Use Quick Sort when:**

- You need in-place sorting (limited memory)
- Average-case performance is more important than worst-case
- Working with arrays (not linked lists)
- Cache performance is important
- You can tolerate unstable sorting

**Consider alternatives when:**

- Stability is required (use merge sort)
- Worst-case performance must be guaranteed (use heap sort)
- Working with linked lists (merge sort works better)
- Memory is not a constraint (merge sort is more predictable)

## Pivot Selection Strategies

### 1. **First Element**

- Simple but can lead to O(n²) on already sorted arrays
- `pivot = arr[low]`

### 2. **Last Element**

- Simple but can lead to O(n²) on reverse sorted arrays
- `pivot = arr[high]`

### 3. **Middle Element**

- Better for already sorted/reverse sorted arrays
- `pivot = arr[(low + high) / 2]`

### 4. **Random Element**

- Provides good average-case performance
- `pivot = arr[random(low, high)]`

### 5. **Median-of-Three**

- Chooses median of first, middle, and last elements
- Good balance of simplicity and performance

## Related Algorithms

- **Merge Sort**: Stable, O(n log n) guaranteed, but requires O(n) space
- **Heap Sort**: In-place, O(n log n) guaranteed, but not stable
- **Insertion Sort**: O(n²) but good for small arrays and nearly sorted data
- **Intro Sort**: Hybrid algorithm that combines quicksort, heapsort, and insertion sort
