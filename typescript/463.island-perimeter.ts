/*
 * @lc app=leetcode id=463 lang=typescript
 *
 * [463] Island Perimeter
 */

// @lc code=start
function islandPerimeter(grid: number[][]): number {
    let perimeter = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                if (row === 0 || grid[row-1][col] === 0) {
                    perimeter++;
                }
                if (row === grid.length -1 || grid[row+1][col] === 0) {
                    perimeter++;
                }
                if (col === 0 || grid[row][col-1] === 0) {
                    perimeter++;
                }
                if (col === grid[row].length-1 || grid[row][col+1] === 0) {
                    perimeter++;
                }
            }
        }
    }

    return perimeter;
};
// @lc code=end
