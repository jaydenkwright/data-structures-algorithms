---
title: Linked List Cycle
emoji: ''
tags:
  - Linked List
  - Solutions
link: https://leetcode.com/problems/linked-list-cycle/
---

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

### Example

![Example](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

### Solution

``` python
class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        if head == None: return False
        slow = fast = head
        
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
            if slow == fast: return True
        return False
        
```