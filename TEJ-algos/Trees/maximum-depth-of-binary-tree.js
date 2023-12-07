// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100
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
//  * @return {number}
//  */

function TreeNode(val,left,right)
{
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
const root = new TreeNode(3); 
root.left = new TreeNode(9); 
root.right = new TreeNode(20); 
root.right.left = new TreeNode(15); 
root.right.right = new TreeNode(7); 
console.dir(root, { depth: null });

var maxDepth = function(root) 
{
    if (root === null) return 0;

    const stack = [];
    const nodeCheck = [];
    let maxLength = 0;
    
    stack.push(root);
    nodeCheck.push(1);

    while (stack.length > 0) 
    {
        const node = stack.pop();
        const currDepth = nodeCheck.pop();

        if(currDepth > maxLength) 
        {
            maxLength = currDepth;
        }

        if(node.left) 
        {
            stack.push(node.left);
            nodeCheck.push(currDepth + 1);
        }
        
        if(node.right) 
        {
            stack.push(node.right);
            nodeCheck.push(currDepth + 1);
        }
    }
    return maxLength;
};

console.log(maxDepth(root));