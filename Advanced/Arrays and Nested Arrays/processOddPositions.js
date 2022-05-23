function processOddPositions(arr){
    let newArr = [];
    arr.reverse();
    
    for (el in arr){
        if (el % 2 == 0){
            newArr.push(arr[el] * 2);
        };
    };
    return newArr.join(' ');
}

processOddPositions([]);