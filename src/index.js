<<<<<<< HEAD

=======
>>>>>>> 9de6e22e1c96a255529511a7ffae40ccbf594f0d
module.exports = function towelSort (matrix) {
    let sortedMatrix = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let columnInd = (i % 2 === 0) ? j : (matrix[i].length - 1 - j);
                sortedMatrix.push( matrix[i][columnInd] );
            }
        }
        return sortedMatrix;
    } else {
        return sortedMatrix;
    }
}
