function animalType(input){
    switch(input[0]){
        case "dog": console.log("mammal");break;
        
        case "tortoise":
        case "snake":
        case "crocodile": console.log("reptile");break;

        default: console.log("unknown");break;
    }
}

animalType(["unknown"]);