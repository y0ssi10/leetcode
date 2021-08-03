/*
 * @lc app=leetcode id=542 lang=typescript
 *
 * [542] 01 Matrix
 */

// @lc code=start
// Brute force
function updateMatrix(mat: number[][]): number[][] {
  const result = Array.from(
    new Array(mat.length),
    () => new Array(mat[0].length).fill(Number.MAX_SAFE_INTEGER));

  mat.forEach((row: number[], i: number) => {
    row.forEach((cell: number, j: number) => {
      if (cell === 0) {
        result[i][j] = 0;
      }
      if (cell === 1) {
        mat.forEach((r: number[], k: number) => {
          r.forEach((c: number, l: number) => {
            if (c === 0) {
              result[i][j] = Math.min(result[i][j], (Math.abs(k-i) + Math.abs(l-j)));
            }
          });

        });
      }
    });
  });

  return result;
};
// @lc code=end
