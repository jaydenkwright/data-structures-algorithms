---
title: Remove All Adjacent Duplicates In String
emoji: ''
tags:
  - Stacks
  - Solutions
link: https://leetcode.com/problems/next-greater-element-i/
---

You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

### Example

```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
```

### Solution

``` python
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        if nums1 == None or nums2 == None: return 
        nextGreatest = {}
        stack = []
        
        for num in nums2:
            while stack and stack[-1] < num:
                nextGreatest[stack.pop()] = num
            stack.append(num)
        
        for i in range(len(nums1)):
            if nums1[i] in nextGreatest:
                nums1[i] = nextGreatest[nums1[i]]
            else:
                nums1[i] = -1
        return nums1
```