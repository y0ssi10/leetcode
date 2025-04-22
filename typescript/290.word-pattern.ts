/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const patternChars = pattern.split('');
  const words = s.split(' ');

  if (patternChars.length !== words.length) {
    return false;
  }

  const patternMap = new Map<string, string>();
  const wordMap = new Map<string, string>();

  for (let i = 0; i < patternChars.length; i++) {
    const char = patternChars[i];
    const word = words[i];

    if (!patternMap.has(char) && !wordMap.has(word)) {
      patternMap.set(char, word);
      wordMap.set(word, char);
    } else if (patternMap.get(char) !== word || wordMap.get(word) !== char) {
      return false;
    }
  }

  return true;
};
// @lc code=end
