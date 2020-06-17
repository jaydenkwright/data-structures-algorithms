---
title: Sliding Window Algorithm
emoji: ''
tags:
  - Arrays
  - Algorithms
  - Hash Tables
link: ''
---

## What is the sliding window?

To understand the Sliding Window algortihm, first imagine two shapes. The first is a long rectangle that can represent a data structure(Array, Linked List, etc.). And then imagine another smaller rectangle that acts as the "window" that looks at a smaller subset of the larger rectangle and asks "Is this the best that I can do?". Depending on whether it is or not, the value is recorded and then the window slides and looks at the next subset and does the same comparision. There are fixed sized sliding windows as well as dynamic ones which are appropriate for different types of questions.


## How to spot problems

The Sliding Window algorithm is very useful in problems that are dealing with items that are iterated through sequentially
- Contiguous sequence of elements (Items grouped together)
- Strings, Arrays, Linked Lists
- Min, max, longest, shortest, contained within given data structure 
- Calculating the max sum, running average, etc.

## Examples & Implementation

### Fixed Length

- Max Sum Subarray of Size k

### Dynamic Variant

- Smallest sum >= some value S

### Dynamic variant with Auxillary Data Structure

- Longest substring with no more than K distinct characters

- String permutations

### Similarities between questions

- Everything grouped sequentially

- Longest, smallest, contains, min/max

### Example


#### Find the max sum subrray of a fixed size k (Fixed Length)


``` js
const maxSumSubarray = (array, k) => {
  let max = 0
  let currentRunningSum = 0
  for (let i = 0; i < array.length; i++){
    currentRunningSum += array[i]
    if(i >= k-1){
      max = Math.max(max, currentRunningSum)
      currentRunningSum -= array[i - (k-1)]
    }
  }
  return max
}
```

``` js
maxSumSubarray([4,2,1,7,8,1,2,8,1,0], 3) // Returns 16
```

#### Smallest subarray with given sum (Dynamic Length)

``` js
const smallestSubbary = (array, target) => {
  let currentWindowSum = 0
  let windowStart = 0
  let minWindowSize = Number.MAX_VALUE
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++){
    currentWindowSum += array[windowEnd]
    while(currentWindowSum >= target){
      minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1)
      currentWindowSum -= array[windowStart]
      windowStart++
    }
  }
  return minWindowSize
}
```

``` js
smallestSubbary([4,2,1,7,8,1,2,8,1,0], 8) // Returns 1
```



