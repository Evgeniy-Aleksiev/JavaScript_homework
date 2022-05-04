function minNumber(input){
    let index = 0
    let command = input[index];

    let currentMinNumber = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop"){
        let n = Number(command);
        if (n < currentMinNumber){
            currentMinNumber = n;
        }
        command = input[index++];
    }

    console.log(currentMinNumber);

}

minNumber(["100",
"99",
"80",
"70",
"Stop"])


