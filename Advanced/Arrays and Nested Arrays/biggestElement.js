function biggestElement(matrix){
    // let biggestNumber = Number.MIN_VALUE;
    // for (row in matrix){
    //     for (col in matrix[row]){
    //         let number = matrix[row][col];
    //         if (number > biggestNumber){
    //             biggestNumber = matrix[row][col];
    //         };
    //     };
    // };
    // return biggestNumber;
    const max = Math.max(...[].concat(...matrix));
    console.log(max);
}

biggestElement(
    [
    [-1, -50, -10],
    [-8, -33, -145]
]);