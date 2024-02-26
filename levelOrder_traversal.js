// Question:  Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// This is a question @FAANG Companies.

// We do this in BFS manner. We use a queue to store the nodes of the tree. We start by pushing the root node into the queue. 
// Then we start a while loop that runs until the queue is empty. In each iteration of the loop, we pop the first node from 
// the queue and push its value into the result array. Then we push the left and right children of the node into the queue. 
// We continue this process until the queue is empty. At the end, we return the result array.


var levelOrder = function(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length) {
        let level = [];
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);

            level.push(current.val);
        }
        result.push(level);
    }
    return result;
}

/*
                3
               / \
              9  20
                /  \
                15   7
*/

// Test case 1
const tree1 = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

//how to test my function
console.log(levelOrder(tree1)); // [[3], [9, 20], [15, 7]]
