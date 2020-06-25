---
title: Intersection of Two Linked Lists
emoji: ''
tags:
  - Linked List
  - Solutions
link: https://leetcode.com/problems/intersection-of-two-linked-lists/
---

Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:

![Example](https://assets.leetcode.com/uploads/2018/12/13/160_statement.png)

begin to intersect at node c1.

### Example

![Example](https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png)

```
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
```

### Solution 

``` python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        if headA == None or headB == None: return None
        currentA = headA
        currentB = headB
        while currentA != currentB:
            if currentA == None:
                currentA = headB
            else:
                currentA = currentA.next
            if currentB == None:
                currentB = headA
            else:
                currentB = currentB.next
        
        return currentA
``` 