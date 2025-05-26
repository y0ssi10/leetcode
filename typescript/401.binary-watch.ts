/*
 * @lc app=leetcode id=401 lang=typescript
 *
 * [401] Binary Watch
 */

// @lc code=start
function readBinaryWatch(turnedOn: number): string[] {
  const minutes = [1,2,4,8,16,32];
  const hours = [1,2,4,8];

  const combination = (array: number[], n: number): number[][] => {
    if (n === 0) {
      return [[]];
    }

    if (array.length < n) {
      return [];
    }

    const [first, ...rest] = array;
    const withFirst = combination(rest, n-1).map((v) => [first, ...v]);
    const withoutFirst = combination(rest, n);

    return withFirst.concat(withoutFirst);
  }

  const result: string[] = [];
  for (let mCount = 0; mCount <= turnedOn; mCount++) {
    const minutesCombination = combination(minutes, mCount)
      .map((v) => v.reduce((sum, value) => sum + value, 0));
    const hoursCombination = combination(hours, turnedOn-mCount)
      .map((v) => v.reduce((sum, value) => sum + value, 0));

    const times = hoursCombination
      .filter(h => h < 12)
      .flatMap(h => minutesCombination
        .filter(m => m < 60)
        .map(m => `${h}:${m < 10 ? '0' : ''}${m}`)
      );

    result.push(...times);
  }

  return result;
};
// @lc code=end

