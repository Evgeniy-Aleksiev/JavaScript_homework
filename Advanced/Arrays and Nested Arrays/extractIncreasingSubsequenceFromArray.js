function solve(array){
    let newArray = [];
    let biggest = array[0];
    for (let index in array){
        let currentNum = array[index];

        if (currentNum >= biggest){
            newArray.push(currentNum)
            biggest = currentNum
        }
    }

    return newArray
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));