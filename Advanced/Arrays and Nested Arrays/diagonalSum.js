function diagonalSum(arr){
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = arr[0].length -1;

    arr.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    });
    console.log(firstDiagonal + ' '+ secondDiagonal);
}

diagonalSum(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );