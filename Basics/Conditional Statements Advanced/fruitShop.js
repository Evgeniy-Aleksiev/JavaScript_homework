function fruitShop(input){
    let product = input[0];
    let dayOfTheWeek = input[1];
    let quantity = Number(input[2]);
    let result = 0

    if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday"){

        switch(product){
            case "banana": result = quantity * 2.70;break;
            case "apple": result = quantity * 1.25;break;
            case "orange": result = quantity * 0.90;break;
            case "grapefruit": result = quantity * 1.60;break;
            case "kiwi": result = quantity * 3.00;break;
            case "pineapple": result = quantity * 5.60;break;
            case "grapes": result = quantity * 4.20;break;
            default: result = "error";break;
        }

    } else if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" ||
     dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {

        switch(product){
            case "banana": result = quantity * 2.50;break;
            case "apple": result = quantity * 1.20;break;
            case "orange": result = quantity * 0.85;break;
            case "grapefruit": result = quantity * 1.45;break;
            case "kiwi": result = quantity * 2.70;break;
            case "pineapple": result = quantity * 5.50;break;
            case "grapes": result = quantity * 3.85;break;
            default: result = "error";break;
        }

    } else {
        result = "error"
    }

    try {
        console.log(result.toFixed(2))
    } catch(err){
        console.log(result)
    }

}

fruitShop(["toim", "Tuesday", "2"])