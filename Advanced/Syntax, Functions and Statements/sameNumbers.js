function sameNumbers(x){
    let numToString = String(x);
    let resul = true;
    let sumOfNumbers = 0;

    for (let index = 0; index < numToString.length; index++) {
        if (index > 0 && numToString[index] !== numToString[index -1]){
            resul = false;
        };
        a = numToString[index]
        sumOfNumbers += Number(a);
    }
    console.log(resul)
    console.log(sumOfNumbers)

}

sameNumbers(1234);