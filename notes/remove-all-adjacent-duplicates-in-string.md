---
title: Remove All Adjacent Duplicates In String
emoji: ''
tags:
  - Stacks
  - Solutions
link: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
---

Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

### Example

```
Input: "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
```

### Solution

``` python
class Solution:
    def removeDuplicates(self, S: str) -> str:
        stack = []
        
        for char in S:
            if stack and stack[-1] == char:
                stack.pop()
            else:
                stack.append(char)
                
        return ''.join(stack)
```

