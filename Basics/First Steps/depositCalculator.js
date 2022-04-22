function depositCalculator(input){
    let sum = Number(input[0]) + Number(input[1]) * ((Number(input[0]) * Number(input[2] / 100)) / 12)
    console.log(sum)
}

depositCalculator(["200 ", "3 ", "5.7 "]);