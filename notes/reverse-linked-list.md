---
title: Reverse Linked List
emoji: ''
tags:
  - Linked List
  - Solutions
link: https://leetcode.com/problems/reverse-linked-list/
---

Reverse a singly linked list.

### Example

```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

### Solution 

``` python
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        while head:
            nextNode = head.next
            head.next = prev
            prev = head
            head = nextNode
        return prev
```