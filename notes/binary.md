---
title: Binary Tree Overview
emoji: ''
tags:
  - Binary Trees
  - Data Structures
link: ''
---

## Implementation

``` js
class Node{
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  }

  add(data){
    const node = this.root
    if(!node){
      this.root = new Node(data)
      return this
    }else{
      const searchBinaryTree = (node) => {
        if(data < node.data){
          if(!node.left){
            node.left = new Node(data)
            return this
          }else if(node.left){
            return searchBinaryTree(node.left)
          }
        }else if(data > node.data){
          if(!node.right){
            node.right = new Node(data)
            return this
          }else if(node.right){
            return searchBinaryTree(node.right)
          }
        }else{
          return null
        }
      }
      return searchBinaryTree(node)
    }
  }

  min(){
    let current = this.root
    while(current.left){
      current = current.left
    }
    return current
  }

  max(){
    let current = this.root
    while(current.right){
      current = current.right
    }
    return current
  }

  find(data){
    let current = this.root
    while(current.data !== data){
      if(data < current.data){
        current = current.left
      }else{
        current = current.right
      }
      if(!current) return null
    }
    return current
  }

  doesExist(data){
    let current = this.root
    while(current){
      if(data === current.data){
        return true
      }
      if(data < current.data){
        current = current.left
      }else{
        current = current.right
      }
    }
    return false
  }

  remove(data){
    const removeNode = (node, data) => {
      if(!node) return null
      if(data === node.data){
        if(!node.left && !node.right) return null
      
      if(!node.left) return node.right
      if(!node.right) return node.left

      let temp = node.right
      while(temp){
        temp = temp.left
      }
      node.data = temp.data
      node.right = removeNode(node.right, temp.data)
      return node
      }else if (data < node.data){
        node.left = removeNode(node.left, data)
        return node
      }else{
        node.right = removeNode(node.right, data)
        return node
      }
    }
  }
}

const binarySearch = new BinarySearchTree()
binarySearch.add(2)
binarySearch.add(4)
binarySearch.add(1)
binarySearch.add(27)
binarySearch.min() // Returns 1
binarySearch.max() // Returns 27
binarySearch.find(1)
binarySearch.doesExist(1) // Returns true
```

## Leetcode Questions

[Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)

[Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)

[Counting Bits](https://leetcode.com/problems/counting-bits/)

[Missing Number](https://leetcode.com/problems/missing-number/)

[Reverse Bits](https://leetcode.com/problems/reverse-bits/)