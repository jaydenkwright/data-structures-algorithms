---
title: Delete Node in a Linked List
emoji: ''
tags:
  - Linked List
  - Solutions
link: https://leetcode.com/problems/delete-node-in-a-linked-list/
---

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:

![Example](https://assets.leetcode.com/uploads/2018/12/28/237_example.png)

### Example

```
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
```

### Solution

``` python
class Solution:
    def deleteNode(self, node):
        node.val = node.next.val
        node.next = node.next.next
```