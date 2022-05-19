function greatestCommonDivisor(a, b){
    if (b){
        return greatestCommonDivisor(b, a % b);
    } else {
        console.log(a);
    };
};

greatestCommonDivisor(15, 5);