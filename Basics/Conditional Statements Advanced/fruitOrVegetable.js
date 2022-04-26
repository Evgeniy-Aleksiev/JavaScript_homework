function fruitOrVegetable(input){
    switch(input[0]){
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "banana": console.log("fruit");break;
        
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable");break;

        default: console.log("unknown");break;
    }
}

fruitOrVegetable(["tomato"]);