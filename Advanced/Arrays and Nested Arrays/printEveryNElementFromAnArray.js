function solve(array, step){
    return array.filter((element, index) => index % step == 0)
}

function solve2(array, step){
    let arr = []
    for (let index = 0; index < array.length; index++){
        if (index % step == 0){
            arr.push(array[index]);
        };
    };
    return arr
}

console.log(solve2(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));