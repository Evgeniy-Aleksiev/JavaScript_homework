function biggerHalf(arr){
    arr.sort((a, b) => a - b);
    const middle = Math.floor(arr.length / 2);
    const result = arr.slice(middle);

    return result
}

biggerHalf([4, 7, 2, 5]);