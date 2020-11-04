
let wordGrid = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['K', 'N', 'A', 'R', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'P', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'A', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'N', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'K', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else if (l.includes(word.split('').reverse().join(''))) {
      return true;
    }
  }

  let numColumns = letters.length;
  let numRows = letters[0].length;
  let output = [];
 
  for (let row = 0; row < numRows; row++) {
    let temp = [];
 
    for (let column = 0; column < numColumns; column++) {
      temp.push(letters[column][row]);
    }
   
    output.push(temp);
  }
 
  //Really doing a horizontal join.  Previous code transposed array (columns to rows)
 
  const verticalJoin = output.map(ls => ls.join(''));
  console.log(verticalJoin);
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;

};

console.log(wordSearch(wordGrid, 'FRANK'));

module.exports = wordSearch;