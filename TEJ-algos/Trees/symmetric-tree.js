// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 

// Follow up: Could you solve it both recursively and iteratively?
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
//  * @return {boolean}
//  */

function TreeNode(val, left, right)
{
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
console.dir(root, {depth : null});

var isSymmetric = function(root) 
{
    let leftStack = [];
    let rightStack = [];

    leftStack.push(root.left);
    rightStack.push(root.right);

    while (leftStack.length > 0 || rightStack.length > 0) 
    {
        let node1 = leftStack.pop();
        let node2 = rightStack.pop();

        if (node1 && node2) 
        {
          if (node1.val !== node2.val) 
          {
            return false;
          }
          leftStack.push(node1.left);
          leftStack.push(node1.right);

          rightStack.push(node2.right);
          rightStack.push(node2.left);
        }

        if ((node1 && !node2) || (!node1 && node2)) 
        {
          return false;
        }
    }

    return true;
};

console.log(isSymmetric(1));