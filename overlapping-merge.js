// if the values from the previous array overlap with the next one then combine them into 1

const overlappingMerge = intervals => {
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

const result = overlappingMerge(param);

console.log(result);
