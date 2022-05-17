function largestNumber(num1, num2, num3){
    let number = 0;

    if (num1 > num2 && num1 > num3){
        number = num1;
    } else if (num2 > num1 && num2 > num3){
        number = num2;
    } else{
        number = num3
    }

    console.log(`The largest number is ${number}.`)
};

largestNumber(5, -3, 16)