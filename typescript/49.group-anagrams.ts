/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const result: {[key: string]: string[]} = {};

  strs.forEach((str: string) => {
    const sorted = str.split('').sort().join('');
    if (result[sorted] !== undefined) {
      result[sorted].push(str);
    } else {
      result[sorted] = [ str ];
    }
  });

  return Object.values(result);
};
// @lc code=end
