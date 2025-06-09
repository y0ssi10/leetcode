/*
 * @lc app=leetcode id=461 lang=typescript
 *
 * [461] Hamming Distance
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
    let xor = x ^ y;
    let distance = 0;

    while (xor > 0) {
        distance += xor & 1;
        xor >>= 1;
    }

    return distance;
};
// @lc code=end

