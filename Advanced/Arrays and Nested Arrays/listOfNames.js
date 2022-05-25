function solve(array){
    array.sort((a, b) => a.localeCompare(b))
    for (index in array){
        console.log(`${Number(index) +1}.${array[index]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"])