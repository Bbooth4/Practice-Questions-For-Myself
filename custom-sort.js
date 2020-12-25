const array = [3, 5, 0, 2, 0, 1, 5, 8];

function sort(arr){
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]){
        const swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
      }
    }
  }
  return arr;
}

const result = sort(array);

console.log(result);
