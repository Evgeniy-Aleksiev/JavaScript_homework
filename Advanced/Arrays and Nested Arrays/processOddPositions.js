function processOddPositions(arr){
//     let newArr = [];
//     arr.reverse();
    
//     for (el in arr){
//         if (el % 2 == 0){
//             newArr.push(arr[el] * 2);
//         };
//     };
//     return newArr.join(' ');
// }
    return arr.filter((a, i) => i % 2 !==0)
      .map(x => x * 2)
      .reverse()
      .join(' ');
}

processOddPositions([]);