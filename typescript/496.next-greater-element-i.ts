/*
 * @lc app=leetcode id=496 lang=typescript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const nextGreaterMap = buildNextGreaterMap(nums2);

  return nums1.map(num => nextGreaterMap.get(num) ?? -1);
};

const buildNextGreaterMap = (nums2: number[]): Map<number, number> => {
  const nextGreaterMap = new Map<number, number>();
  const stack: number[] = [];

  for (const currentNum of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < currentNum) {
      const smallerNum = stack.pop()!;
      nextGreaterMap.set(smallerNum, currentNum);
    }
    stack.push(currentNum);
  }

  for (const remainingNum of stack) {
    nextGreaterMap.set(remainingNum, -1);
  }

  return nextGreaterMap;
};
// @lc code=end
