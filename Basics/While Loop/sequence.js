function sequence(input){
    let sequenceOfNumbers = 1;
    let n = Number(input[0]);

    while (sequenceOfNumbers <= n){
        console.log(sequenceOfNumbers);
        sequenceOfNumbers *= 2;
        sequenceOfNumbers++;
    }
}

sequence(["17"])