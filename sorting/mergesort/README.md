# Merge Sort Algorithm

## Overview

Merge Sort is a **divide-and-conquer** sorting algorithm that recursively breaks down a problem into smaller subproblems until they become simple enough to solve directly. It has a guaranteed time complexity of **O(n log n)** and is a **stable** sorting algorithm.

## How It Works

### 1. Divide Phase

- Split the array into two halves recursively
- Continue dividing until each subarray has 1 or 0 elements (base case)

### 2. Conquer Phase

- Merge the sorted subarrays back together
- Compare elements from both arrays and place them in the correct order

### 3. Combine Phase

- The merged result becomes the sorted array for the parent call

## Algorithm Steps

```
Input: [64, 34, 25, 12, 22, 11, 90]

Step 1: Divide
[64, 34, 25, 12] [22, 11, 90]
[64, 34] [25, 12] [22, 11] [90]
[64] [34] [25] [12] [22] [11] [90]

Step 2: Merge (Conquer)
[34, 64] [12, 25] [11, 22] [90]
[12, 25, 34, 64] [11, 22, 90]

Step 3: Final Result
[11, 12, 22, 25, 34, 64, 90]
```

## Implementation Details

### Functions

#### `mergeSort(arr: number[], depth: number = 0): number[]`

- **Purpose**: Main recursive function that implements the divide-and-conquer strategy
- **Parameters**:
  - `arr`: Array to be sorted
  - `depth`: Recursion depth (for debugging/logging purposes)
- **Returns**: Sorted array

#### `mergeTwoSortedArrays(arr1: number[], arr2: number[]): number[]`

- **Purpose**: Merges two already sorted arrays into a single sorted array
- **Parameters**:
  - `arr1`: First sorted array
  - `arr2`: Second sorted array
- **Returns**: Merged sorted array

### Key Features

1. **Stable Sorting**: Maintains relative order of equal elements
2. **Recursive Implementation**: Uses divide-and-conquer approach
3. **Debug Logging**: Includes depth tracking for visualization
4. **Edge Case Handling**: Properly handles empty arrays and single elements

## Time & Space Complexity

| Metric           | Complexity | Explanation                                                               |
| ---------------- | ---------- | ------------------------------------------------------------------------- |
| **Time**         | O(n log n) | Always performs the same number of operations regardless of input order   |
| **Space**        | O(n)       | Requires additional space proportional to input size for temporary arrays |
| **Best Case**    | O(n log n) | Even with already sorted input                                            |
| **Worst Case**   | O(n log n) | Consistent performance                                                    |
| **Average Case** | O(n log n) | Predictable performance                                                   |

## Advantages

✅ **Consistent Performance**: O(n log n) regardless of input order  
✅ **Stable Algorithm**: Preserves relative order of equal elements  
✅ **Predictable**: Same time complexity for best, worst, and average cases  
✅ **Parallelizable**: Can be easily adapted for parallel processing

## Disadvantages

❌ **Space Complexity**: Requires O(n) additional space  
❌ **Not In-Place**: Cannot sort in the original array without extra space  
❌ **Overkill for Small Arrays**: Insertion sort may be faster for small datasets

## Usage Examples

### Basic Usage

```typescript
import { mergeSort } from "./main.ts";

const numbers = [64, 34, 25, 12, 22, 11, 90];
const sorted = mergeSort(numbers);
console.log(sorted); // [11, 12, 22, 25, 34, 64, 90]
```

### Edge Cases

```typescript
// Empty array
mergeSort([]); // []

// Single element
mergeSort([42]); // [42]

// Already sorted
mergeSort([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]

// Reverse sorted
mergeSort([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]

// With duplicates
mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
// [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
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
- Stability verification
- Helper function validation

## When to Use Merge Sort

**Use Merge Sort when:**

- You need guaranteed O(n log n) performance
- Stability is important
- You have sufficient memory for O(n) space complexity
- Working with linked lists (merge sort works well with linked lists)

**Consider alternatives when:**

- Memory is very limited (use in-place algorithms like quicksort)
- Working with small arrays (insertion sort may be faster)
- Need in-place sorting (use heapsort or quicksort)

## Related Algorithms

- **Quick Sort**: In-place, average O(n log n), but worst case O(n²)
- **Heap Sort**: In-place, O(n log n), but not stable
- **Insertion Sort**: O(n²) but good for small arrays and nearly sorted data
- **Tim Sort**: Hybrid algorithm that combines merge sort and insertion sort
