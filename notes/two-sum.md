---
title: 1. Two Sum
emoji: ''
tags:
  - Arrays
  - Hash Tables
link: https://leetcode.com/problems/two-sum/
---

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

### Example:

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

### Answer

``` js
var twoSum = function(nums, target) {
  if(nums.length === 0) return []
    let map = {}
    let answer = []
    for (let i = 0; i < nums.length; i++){
        let difference = target - nums[i]
        if(difference in map){
          answer[0] = i < map[difference] ? i : map[difference]
          answer[1] = i > map[difference] ? i : map[difference]
          return answer
        }
          map[nums[i]] = i
    }
    return answer
};
```