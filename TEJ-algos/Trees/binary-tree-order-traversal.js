// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */

function TreeNode(val, left, right) 
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(3); 
root.left = new TreeNode(9); 
root.right = new TreeNode(20); 
root.right.left = new TreeNode(15); 
root.right.right = new TreeNode(7); 
console.dir(root, { depth: null });

var levelOrder = function(root) 
{
    if(!root) return [];
    let queue = [];
    let finalArray = [];
    queue.push(root);
    while(queue.length > 0)
    {
        let tempArray = [];
        let queueLength = queue.length;
        for(let i=0; i< queueLength; i++)
        {
            let node = queue.shift()
            tempArray.push(node.val)
            if(node.left)
            {
                queue.push(node.left);
            }
            if(node.right)
            {
                queue.push(node.right);
            }
        }
        finalArray.push(tempArray);
     }
     return finalArray;
};

console.log(levelOrder(root));