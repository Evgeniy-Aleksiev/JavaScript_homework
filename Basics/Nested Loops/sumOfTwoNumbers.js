function sumOfTwoNumbers(input){
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationNumber = 0;
    let isFound = false;

    for (let x = startNumber; x <= endNumber; x++){
        for (let y = startNumber; y <= endNumber; y++){
            combinationNumber++;
            
            if (y + x === magicNumber){
                isFound = true;
                console.log(`Combination N:${combinationNumber} (${x} + ${y} = ${magicNumber})`)
                break;    
            }
        }
        if (isFound){
            break
        }
    }
    
    if (isFound === false){
        console.log(`${combinationNumber} combinations - neither equals 20`)
    }
}

sumOfTwoNumbers(["88", 
"888", 
"2000"])

