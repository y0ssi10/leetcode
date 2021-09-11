/*
 * @lc app=leetcode id=764 lang=typescript
 *
 * [764] Largest Plus Sign
 */

// @lc code=start
function orderOfLargestPlusSign(n: number, mines: number[][]): number {
  const dp = Array.from(new Array(n), _ => new Array(n).fill(1));
  for (const [r, c] of mines) {
    dp[r][c] = 0;
  }
  let ans = 0;
  let count = 0;

  for (let r = 0; r < n; r++) {
    count = 0;
    for (let c = 0; c < n; c++) {
      if (dp[r][c] === 0) {
        count = 0;
      } else {
        count += 1;
        dp[r][c] = count;
      }
    }

    count = 0;
    for (let c = n-1; c > -1; c--) {
      if (dp[r][c] === 0) {
        count = 0;
      } else {
        count += 1;
        if (count < dp[r][c]) {
          dp[r][c] = count;
        }
      }
    }
  }

  for (let c = 0; c < n; c++) {
    count = 0;
    for (let r = 0; r < n; r++) {
      if (dp[r][c] === 0) {
        count = 0;
      } else {
        count += 1;
      }
      if (count < dp[r][c]) {
        dp[r][c] = count;
      }
    }

    count = 0;
    for (let r = n-1; r > -1; r--) {
      if (dp[r][c] === 0) {
        count = 0;
      } else {
        count += 1;
      }
      if (count < dp[r][c]) {
        dp[r][c] = count;
      }

      if (dp[r][c] > ans) {
        ans = dp[r][c];
      }
    }
  }

  return ans;
};
// @lc code=end

