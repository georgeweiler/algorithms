
/* return the position of a number [row, col] from a sorted matrix
 *
 * example:
 * var matrix = [
 *   [2, 4, 6, 7],
 *   [5, 7, 8, 11],
 *   [9, 10, 15, 18],
 *   [11, 16, 20, 25],
 * ]
 *
 * searchSortedMatrix(matrix, 15); // returns [2, 2]; 
 */
const searchSortedMatrix = (matrix, target) => {
  let y = matrix.length-1, x = 0; // start in bottom left;
    while(matrix[y][x] !== target){
      if(y-1 < 0 || x+1>matrix[0].length){
        return null
      }
      if(matrix[y][x] > target){
        y--;
      } else {
        x++;
      }
    }
    return[y, x]
};