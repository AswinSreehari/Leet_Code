/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
    let sum = 0;
function sumLeftNodesRecursively(node: TreeNode, isLeft: boolean) {
  if (isLeft && !node.left && !node.right) {
    sum += node.val;
  }

  if (node.left) {
    sumLeftNodesRecursively(node.left, true);
  }

  if (node.right) {
    sumLeftNodesRecursively(node.right, false);
  }
}

if (root) {
  sumLeftNodesRecursively(root, false);
}

return sum;
};