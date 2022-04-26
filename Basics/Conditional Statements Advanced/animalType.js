function animalType(input){
    switch(input[0]){
        case "dog": console.log("mammal");break;
        
        case "reptile":
        case "snake ":
        case "crocodile": console.log("reptile");break;

        default: console.log("unknown");break;
    }
}

animalType(["unknown"]);