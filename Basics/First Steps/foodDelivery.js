function foodDelivery(input){
    let chickenMenuPrice = Number(input[0]) * 10.35;
    let fishMenuPrice = Number(input[1]) * 12.40;
    let vegetarianMenuPrice = Number(input[2]) * 8.15;

    let totalMenuPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    let dessertPrice = totalMenuPrice * 0.20
    console.log(totalMenuPrice + dessertPrice + 2.50)
}

foodDelivery(["2 ", "4 ", "3 "]);