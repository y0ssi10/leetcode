/*
 * @lc app=leetcode id=455 lang=typescript
 *
 * [455] Assign Cookies
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
    const childrenGreed = g.sort((a, b) => a - b);
    const cookieSizes = s.sort((a, b) => a - b);

    let childIndex = 0;
    let cookieIndex = 0;
    while (childIndex < childrenGreed.length && cookieIndex < cookieSizes.length) {
        if (childrenGreed[childIndex] <= cookieSizes[cookieIndex]) {
            childIndex++;
        }
        cookieIndex++;
    }

    return childIndex;
};
// @lc code=end

