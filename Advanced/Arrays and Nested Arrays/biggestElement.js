function biggestElement(matrix){
    let biggestNumber = Number.MIN_VALUE;
    for (row in matrix){
        for (col in matrix[row]){
            let number = matrix[row][col];
            if (number > biggestNumber){
                biggestNumber = matrix[row][col];
            };
        };
    };
    console.log(biggestNumber);;
}

biggestElement(
    [
    [20, 50, 10],
    [8, 33, 145]
]);