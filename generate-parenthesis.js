const generate = (left, right, item, resultArray) => n => {
  if (left < n) {
    generate(left+1, right, item+'(', resultArray)(n);
  };

  if (right < n && right < left) {
    generate(left, right+1, item+')', resultArray)(n);
  };

  if (right === n) resultArray.push(item);

  return resultArray;
};

const result = generate(0, 0, '', [])(+process.argv[2]);

console.log(result);
