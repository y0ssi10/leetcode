/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  const vowels = new Set(['a', 'i', 'u', 'e', 'o']);
  const sArray = s.split('');
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    while (start < end && !vowels.has(sArray[start].toLowerCase())) {
      start++;
    }

    while (start < end && !vowels.has(sArray[end].toLowerCase())) {
      end--;
    }

    if (start < end) {
      [sArray[start], sArray[end]] = [sArray[end], sArray[start]];
      start++;
      end--;
    }
  }

  return sArray.join('');

};
// @lc code=end

