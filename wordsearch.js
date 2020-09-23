const transpose = function(matrix) {

    let numColumns = matrix.length;
    let numRows = matrix[0].length;
    let output = [];
  
    for (let row = 0; row < numRows; row++) {
      let temp = [];
  
      for (let column = 0; column < numColumns; column++) {
        temp.push(matrix[column][row]);
      }
      output.push(temp);
    }
    return output;
  };
  
  const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
  
    for (let h of horizontalJoin) {
      if (h.includes(word)) {
        return true;
      }
    }
    const verticalSearch = transpose(letters).map(ls => ls.join(''));
  
    for (let v of verticalSearch) {
      if (v.includes(word)) {
        return true;
      }
    }
    return false;
  };
  
  
  module.exports = wordSearch;