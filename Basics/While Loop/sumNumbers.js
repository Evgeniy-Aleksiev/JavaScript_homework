function sumNumbers(input){
    let index = 0;
    let sumOfNumbers = 0;
    let isValid = true;

    let firstNumber = Number(input[index]);
    index++;
    

    while (sumOfNumbers < firstNumber){
        let data = Number(input[index])
        sumOfNumbers += data;
        index++;
        if (index > input.length){
            isValid = false;
            break;
        }
    }

    if (isValid){
        console.log(sumOfNumbers)
    }
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

