---
title: Build an Array With Stack Operations
emoji: ''
tags:
  - Stacks
  - Solutions
link: https://leetcode.com/problems/build-an-array-with-stack-operations/
---

Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.

Build the target array using the following operations:

Push: Read a new element from the beginning list, and push it in the array.
Pop: delete the last element of the array.
If the target array is already built, stop reading more elements.
You are guaranteed that the target array is strictly increasing, only containing numbers between 1 to n inclusive.

Return the operations to build the target array.

You are guaranteed that the answer is unique.

### Example

```
Input: target = [1,3], n = 3
Output: ["Push","Push","Pop","Push"]
Explanation: 
Read number 1 and automatically push in the array -> [1]
Read number 2 and automatically push in the array then Pop it -> [1]
Read number 3 and automatically push in the array -> [1,3]
```

### Solution

``` python
class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        stack = []
        
        for i in range(1, target[-1]+1):
            if i in target:
                stack.append('Push')
            else:
                stack.append('Push')
                stack.append('Pop')
        return stack
```