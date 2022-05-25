function solve(array, rotates){
    for (let x = 0; x < rotates; x++){
        elemet = array.pop();
        array.unshift(elemet);
    }
    console.log(array.join(' '));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);