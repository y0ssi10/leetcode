/*
 * @lc app=leetcode id=482 lang=typescript
 *
 * [482] License Key Formatting
 */

// @lc code=start
function licenseKeyFormatting(s: string, k: number): string {
    const cleanedStr = s.replaceAll('-', '').toUpperCase();
    const firstGroupLength = cleanedStr.length % k;
    const licenseKeyParts: string[] = [];

    if (firstGroupLength) {
        licenseKeyParts.push(cleanedStr.substring(0, firstGroupLength));
    }
    for (let i = firstGroupLength; i < cleanedStr.length; i += k) {
        licenseKeyParts.push(cleanedStr.substring(i, k));
    }

    return licenseKeyParts.join('-');
};// @lc code=end

