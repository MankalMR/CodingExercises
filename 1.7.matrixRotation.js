/**
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 */
function matrixRotation (matrix) {
    var results = [];
    var N = matrix.length;
    // we use N for both loops because we are looking at this from a
    // column and row perspective rather than nested arrays
    for (var col = 0; col < N; col++) {
        var inner = [];
        for (var row = 0; row < N; row++) {
            var item = matrix[row][col];
            inner.unshift(item);
        }
        results.push(inner);
    }

    return results;
}

console.log("[[1,2,3],[4,5,6],[7,8,9]]: ", matrixRotation([[1,2,3],[4,5,6],[7,8,9]]));