module.exports = function towelSort(matrix) {
    if (arguments.length == 0) return [];
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }
    }
    return (res = matrix.flat());
};
