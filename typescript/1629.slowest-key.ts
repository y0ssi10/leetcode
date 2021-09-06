/*
 * @lc app=leetcode id=1629 lang=typescript
 *
 * [1629] Slowest Key
 */

// @lc code=start
function slowestKey(releaseTimes: number[], keysPressed: string): string {
  let maxDuration = releaseTimes[0];
  let key = keysPressed[0];
  for (let i = 1; i < releaseTimes.length; i++) {
    const duration = releaseTimes[i] - releaseTimes[i-1];
    if (maxDuration < duration || (maxDuration === duration && key < keysPressed[i])) {
      key = keysPressed[i];
      maxDuration = duration;
    }
  }

  return key;
};
// @lc code=end

