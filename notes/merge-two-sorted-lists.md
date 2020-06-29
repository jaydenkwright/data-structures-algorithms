---
title: Merge Two Sorted Lists
emoji: ''
tags:
  - Linked List
  - Solutions
link: https://leetcode.com/problems/merge-two-sorted-lists/
---

Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

### Example

```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

### Solution

```python
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = head = ListNode(0)
        while l1 and l2:
            if l1.val < l2.val:
                head.next = l1
                l1 = l1.next
            else:
                head.next = l2
                l2 = l2.next
            head = head.next
        if l1 != None:
            head.next = l1
            l1 = l1.next
        if l2 != None:
            head.next = l2
            l2 = l2.next
        return dummy.next
```