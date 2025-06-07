/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
    for (let length = 1; length <= s.length / 2; length++) {
        const pattern = s.substring(0, length);
        
        if (s.length % pattern.length !== 0) {
            continue;
        }
        
        const repeatedPattern = pattern.repeat(s.length / pattern.length);
        if (repeatedPattern === s) {
            return true;
        }
    }

    return false;
};
// @lc code=end

