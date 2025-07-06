/*
 * @lc app=leetcode id=501 lang=typescript
 *
 * [501] Find Mode in Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */
function findMode(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  const map: Map<number, number> = new Map();
  collectValues(root, map);

  const maxCount = Math.max(...map.values());
  const modes = Array.from(map.entries())
    .filter(([key, count]) => count === maxCount)
    .map(([key]) => key);

  return modes;
};

const collectValues = (node: TreeNode, map: Map<number, number>): void => {
  if (node.left) {
    collectValues(node.left, map);
  }

  map.set(node.val, (map.get(node.val) || 0) + 1);

  if (node.right) {
    collectValues(node.right, map);
  }
};

// @lc code=end

