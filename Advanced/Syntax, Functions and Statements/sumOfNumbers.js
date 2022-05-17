function sumOfNumbers(num1, num2){
    let totalSum = 0;
    for (let n = Number(num1); n <= Number(num2); n++){
        totalSum += n;
    };
    console.log(totalSum);
};

sumOfNumbers('1', '5');