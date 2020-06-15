---
title: Contains Duplicate
emoji: ''
tags:
  - Arrays
  - Hash Tables
  - Sets
link: https://leetcode.com/problems/two-sum/
---

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

### Example

```
Input: [1,2,3,1]
Output: true
```

### Using Javascript Sets()

``` js
const containsDuplicate = (nums) => {
    if(nums.length === 0) return false
    let set = new Set()
    for (let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
    }
    return false
};
```

### Using Hash Tables

``` js
const containsDuplicate = (nums) => {
    if(nums.length === 0) return false
    let map = {}
    for (let i = 0; i < nums.length; i++){
        if(nums[i] in map){
            return true
        }
        map[nums[i]] = true
    }
    return false
};
```