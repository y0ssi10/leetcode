/*
 * @lc app=leetcode id=476 lang=typescript
 *
 * [476] Number Complement
 */

// @lc code=start
function findComplement(num: number): number {
    let mask = num;
    mask |= mask >> 1;
    mask |= mask >> 2;
    mask |= mask >> 4;
    mask |= mask >> 8;
    mask |= mask >> 16;
        
    return num ^ mask;
};
// @lc code=end
