const directions = ['top', 'left', 'right', 'bottom'];

const directionChecker = (currentI, i, board, direction) => ({
  top: i !== 0 ? board[i-1][currentI] : null,
  left: currentI !== 0 ? board[i][currentI-1] : null,
  right: currentI !== board[i].length - 1 ? board[i][currentI+1] : null,
  bottom: i !== board.length - 1 ? board[i+1][currentI] : null
})[direction];

const directionAddition = {
  top: 0,
  left: -1,
  right: 1,
  bottom: 0
};

const indexAddition = {
  top: -1,
  left: 0,
  right: 0,
  bottom: 1
};

const options = (currentI, i, board, word, progress, directionI) => {
  const direction = directions[directionI];
  // console.log({currentI, i, direction});
  const checked = directionChecker(currentI, i, board, direction);
  // console.log({direction, checked, progress, word});

  if (checked && checked === word[progress.length]) {
    progress += checked;

    // console.log({word, progress});

    if (progress === word) return true;

    const newCurrentI = currentI + directionAddition[direction];
    const newI = i + indexAddition[direction];
    // console.log('OLD', {currentI, i, direction});
    // console.log('NEW', {newCurrentI, newI, progress, word});

    return options(newCurrentI, newI, board, word, progress, 0);
  }

  // console.log('DIRECTIONS', {directionI, direction});
  if (directionI !== directions.length-1) {
    return options(currentI, i, board, word, progress, directionI+1);
  }

  return false;
}

const exist = (board, word) => {
  let row;
  let i = 0;
  let success = false;
  const firstLetter = word[0];
  const rowLength = board[0].length;
  
  // checks rows
  while(!success && i < board.length) {
    row = board[i];
    
    let directionI = 0;
    // checks directions
    while(!success && directionI !== directions.length-1) {
      let rowI = 0;
      console.log({firstLetter, rowI, i, row});
      // checks columns
      while(!success && rowI !== rowLength-1) {
        const checked = options(rowI, i, board, word, firstLetter, directionI);

        if (checked) success = true;
        directionI++;
      }


    };

    console.log('INDEX', i);
    i++;
  }

  return success;
};

const word = 'SE';

const board = [["A","B","C","E"], ["S","F","C","S"], ["A","D","E","E"]];

const result = exist(board, word);

console.log(result);
