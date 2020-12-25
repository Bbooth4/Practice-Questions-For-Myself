/**
  Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */
const merge = intervals => {
  let shouldSkip = false;

  return intervals.reduce((acc, e, i, a) => {
    const next = a[i+1];

    if (next && e[1] >= next[0] && e[1] <= next[1]) {
      shouldSkip = true;
      return [...acc, [e[0], next[1]]]
    } else if (!shouldSkip) {
      return [...acc, e];
    }
    shouldSkip = false;
    return acc;
  }, []);
};

const param = [[1,3], [2,6], [8,10], [15,18]];

const result = merge(param);

console.log(result);
