---
title: Sort the Matrix Diagonally
emoji: ''
tags:
  - Arrays
  - Sorting
  - Solutions
link: https://leetcode.com/problems/sort-the-matrix-diagonally/
---

Given a m * n matrix mat of integers, sort it diagonally in ascending order from the top-left to the bottom-right then return the sorted array.

### Example

![Example](https://assets.leetcode.com/uploads/2020/01/21/1482_example_1_2.png)

```
Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
```

### Solution 

``` js
var diagonalSort = function(mat) {
  let map = {}
  let row = mat.length
  let col = mat[0].length
  for (let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      let difference = i - j
      if(difference in map){
        map[difference].push(mat[i][j])
      }else{
        map[difference] = [mat[i][j]]
      }
    }
  }

  for(let key in map){
    map[key].sort((a,b) => a-b)
  }

  for(let i = 0; i < row;i++){
    for(let j = 0; j < col; j++){
      let difference = i-j
      mat[i][j] = map[difference][0]
      map[difference].shift()
    }
  }
  return mat
};
```