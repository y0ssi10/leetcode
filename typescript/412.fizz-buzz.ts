/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
  const results: string[] = [];
  for (let i = 1; i <= n; i++) {
    let value = '';
    if (i % 3 === 0) {
      value += 'Fizz';
    }
    if (i % 5 === 0) {
      value += 'Buzz';
    }
    if (value === '') {
      value = i.toString();
    }
    results.push(value);
  }
  return results;
};
// @lc code=end
