function evenPositionElement(input){
    let result = '';
    for (i in input){
        if (i % 2 == 0){
            result += input[i];
            result += ' ';
        }
    }
    console.log(result);
};

evenPositionElement(['20', '30', '40', '50', '60']);