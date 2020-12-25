// NOTE: This does not work but it displays my original thinking about how to approach the problem

const options = (i, wordIndex, row, board, word, progress, direction) => {
  const top = direction !== 'top' && i !== 0 ? board[i-1][wordIndex] : null;
  const left = direction !== 'left' && wordIndex !== 0 ? row[wordIndex-1] : null;
  const right = direction !== 'right' && wordIndex !== row.length - 1 ? row[wordIndex+1] : null;
  const bottom = direction !== 'bottom' && i !== board.length - 1 ? board[i+1][wordIndex] : null;

  console.log(i, wordIndex, {top, left, right, bottom, progress});
  const array = [top, left, right, bottom];

  const firstIndex = array.indexOf(word[i+1]);
  const lastIndex = array.lastIndexOf(word[i+1]);
  console.log(array, firstIndex, lastIndex, word[i+1]);

  progress += array[firstIndex] || array[lastIndex];

  if (word !== progress) {
    if (firstIndex === 0) {
      console.log('FIRST TOP');
      options(i, wordIndex, board[i-1], board, word, progress, 'top');
    }
    if (firstIndex === 1) {
      console.log('FIRST LEFT');
      options(i, wordIndex-1, row, board, word, progress, 'left');
    }
    if (firstIndex === 2) {
      console.log('FIRST RIGHT');
      options(i, wordIndex+1, row, board, word, progress, 'right');
    }
    if (firstIndex === 3) {
      console.log('FIRST BOTTOM');
      options(i, wordIndex, board[i+1], board, word, progress, 'bottom');
    }
  
    if (lastIndex === 0) {
      console.log('LAST TOP');
      options(i, wordIndex, board[i-1], board, word, progress, 'top');
    }
    if (lastIndex === 1) {
      console.log('LAST LEFT');
      options(i, wordIndex-1, row, board, word, progress, 'left');
    }
    if (lastIndex === 2) {
      console.log('LAST RIGHT');
      options(i, wordIndex+1, row, board, word, progress, 'right');
    }
    if (lastIndex === 3) {
      console.log('LAST BOTTOM');
      options(i, wordIndex, board[i+1], board, word, progress, 'bottom');
    }
  }

  console.log({word, progress});
  if (word === progress) return true;
  return false;
}

const exist = (board, word) => {
  let i = 0;
  let row;
  let success = false;
  const firstLetter = word[0];
  
  while(!success && i < board.length) {
    row = board[i];
    const firstIndex = row.indexOf(firstLetter);
    console.log({firstLetter, firstIndex, i, row});

    if (firstIndex > -1) {
      const first = options(i, firstIndex, row, board, word, firstLetter);
      console.log(i, {first});
      if (first) success = true;

      if (!first) {
        const lastIndex = row.lastIndexOf(firstLetter);

        if (lastIndex > -1 && lastIndex !== firstIndex) {
          const last = options(i, lastIndex, row, board, word, firstLetter);
          console.log(i, {last});
          if (last) success = true;
        }
      }
    }
    console.log(i);
    i++;
  }

  return success;
};

const word = 'SFC';

const board = [["A","B","C","E"], ["S","F","C","S"], ["A","D","E","E"]];

const result = exist(board, word);

console.log(result);
