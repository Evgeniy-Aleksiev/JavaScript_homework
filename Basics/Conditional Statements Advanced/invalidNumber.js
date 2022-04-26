function invalidNumber(input){
    if (100 <= Number(input[0]) && Number(input[0]) <= 200 || Number(input[0]) === 0){
    } else {
        console.log("Invalid")
    }
}

invalidNumber(["0"])