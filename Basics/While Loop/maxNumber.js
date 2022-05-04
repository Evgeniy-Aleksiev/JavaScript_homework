function maxNumber(input){
    let index = 0
    let command = input[index];

    let currentMaxNumber = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop"){
        let n = Number(command);
        if (n > currentMaxNumber){
            currentMaxNumber = n;
        }
        command = input[index++];
    }

    console.log(currentMaxNumber);

}

maxNumber(["-1",
"-2",
"Stop"])

