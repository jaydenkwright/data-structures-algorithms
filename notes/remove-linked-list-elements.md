---
title: Remove Linked List Elements
emoji: ''
tags:
  - Linked List
  - Solutions
link: https://leetcode.com/problems/remove-linked-list-elements/
---

Remove all elements from a linked list of integers that have value val.

### Example

```
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
```

### Solution


``` python
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        if head == None: return None
        while head != None and head.val == val:
            head = head.next
        current = head
        while current and current.next:
            if current.next.val == val:
                current.next = current.next.next
            else:
                current = current.next
        return head
        
```