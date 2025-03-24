/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  let result = 0;
  const array = s.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'I') {
      result += 1;
      if (array[i+1] === 'V') {
        result += 3;
        i++;
        continue;
      }
      if (array[i+1] === 'X') {
        result += 8;
        i++;
        continue;
      }
    }
    if (array[i] === 'V') {
      result += 5;
    }
    if (array[i] === 'X') {
      result += 10;
      if (array[i+1] === 'L') {
        result += 30;
        i++;
        continue;
      }
      if (array[i+1] === 'C') {
        result += 80;
        i++;
        continue;
      }
    }
    if (array[i] === 'L') {
      result += 50;
    }
    if (array[i] === 'C') {
      result += 100;
      if (array[i+1] === 'D') {
        result += 300;
        i++;
        continue;
      }
      if (array[i+1] === 'M') {
        result += 800;
        i++;
        continue;
      }
    }
    if (array[i] === 'D') {
      result += 500;
    }
    if (array[i] === 'M') {
      result += 1000;
    }
  }

  return result;
}

// @lc code=end

