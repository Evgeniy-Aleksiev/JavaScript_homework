function basketballEquipment(input){
    let trainingPricePerYear = Number(input[0]);
    let basketballShoes = trainingPricePerYear - (trainingPricePerYear * 0.40);
    let basketballOutfit = basketballShoes - (basketballShoes * 0.20);
    let basketballBall = basketballOutfit / 4;
    let basketballAccessories = basketballBall / 5;

    console.log(trainingPricePerYear + basketballShoes + basketballOutfit + basketballBall +basketballAccessories)
}

basketballEquipment(["550 "])