module.exports = function solveSudoku(matrix) {

    function isValid(matrix, row, col, num) {
        for (let i = 0; i < 9; i++) {
            const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const n = 3 * Math.floor(col / 3) + i % 3;
            if (matrix[row][i] === num || matrix[i][col] === num || matrix[m][n] === num) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[i][j] === 0) {
                for (let k = 1; k <= 9; k++) {
                    if (isValid(matrix, i, j, k)) {
                        matrix[i][j] = k;
                        if (solveSudoku(matrix)) {
                            return matrix;
                        } else {
                            matrix[i][j] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return matrix;
}
