function solve(commands){
    let numbers = [];
    
    for (let index in commands){
        if (commands[index] == 'add'){
            numbers.push(Number(index) + 1)
        } else {
            numbers.pop()
        }
    }
    if (numbers.length > 0){
        console.log(numbers.join('\n'));
    } else {
        console.log('Empty')
    }
}

solve(['remove', 
'remove', 
'remove']
);