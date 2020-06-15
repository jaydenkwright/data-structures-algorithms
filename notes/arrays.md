---
title: Array Overview
emoji: ''
tags:
  - Arrays
  - Data Structures
link: ''
---

# Arrays

One of the simplest and most widely used data structures. An array is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. Arrays are zero indexed.

``` js
const string = ['a', 'b', 'c', 'd']

string[2] // Will return 'c'

strings.push('e') // Adds 'e' to the end of the array - O(1)

// ['a', 'b', 'c', 'd', 'e']

strings.pop() // Removes the last item of the array - O(1)

// ['a', 'b', 'c', 'd']

strings.unshift('x') // Add to the beginning of array - O(n)

// ['x', 'a', 'b', 'c', 'd']

strings.splice(2, 0, 'z') // Adds 'z' to the 2 index and shifts the rest of the array down - O(n)

// ['x', 'a', 'z', 'b', 'c', 'd']
```

## Static vs. Dynamic arrays

Static arrays are fixed in size, meaning the the number of elements must be specified beforehand. Dynamic arrays on the otherhand allow us to copy and rebuild an array with more elements in a new location if we need more memory. 

## Time Complexity

|   |  |
|---------|------|
| Lookup  | O(1) |
| Append*    | O(1) |
| Insert  | O(n) |
| Delete  | O(n) |

\* Could possibly be O(n) if enough memory is not available

### Static Array example (C++)
``` cpp
int a[20]; // Creating an array that can hold 20 elelements

int b[5] {1,2,3,4,5} // An array with 5 elements, [1,2,3,4,5]
```

### Dynamic Array example
``` js
const a = [1,2,3,4,5] // Memory is automatically allocated when a new element is added
```

Static arrays can be beneficially because they allow you to manage memory in a much more effecient way than you would be able to with dynamic arrays. 

## Implementing An Array

``` js
class MyArray{
  constructor(){
    this.length = 0
    this.data = {}
  }

  get(index){ // O(1)
    return this.data[index]
  }

  push(item){ // O(1)
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop(){ // O(1)
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length-1]
    this.length--
    return lastItem
  }

  delete(index){ // O(n)
    const item = this.data[index]
    this.shift(index)
  }

  shift(index){ // O(n)
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}
```

## Strings

When being asked a question about strings, consider splitting into an array, doing some kind of loop/operation and then combining it and returning it as a string.

``` js
// Create a function that reverses strings

const reverse = string => {
  if(!string) return
  const reversed = []
  for(let i = string.length - 1; i >= 0; i--){
    reversed.push(string[i])
  }
  return reversed.join('')
}
```

## Leetcode Questions

[Two Sum](https://leetcode.com/problems/two-sum/)

[Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

[Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

[Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

[Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

[Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)

[Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

[Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

[3Sum](https://leetcode.com/problems/3sum/)

[Container With Most Water](https://leetcode.com/problems/container-with-most-water/)