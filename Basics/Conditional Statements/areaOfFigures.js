function areaOfFigures(input){
    let figureType = input[0];
    let result = 0

    if (figureType == "square"){
        let a = Number(input[1]);
        result = a * a    
    } else if (figureType == "rectangle"){
        let length = Number(input[1]);
        let width = Number(input[2]); 
        result = length * width
    } else if (figureType == "circle"){
        let radius = Number(input[1]);
        result = Math.pow(radius, 2) * Math.PI
    } else {
        let h = Number(input[1]);
        let b = Number(input[2]);
        result = (h * b) / 2
    }

    console.log(result.toFixed(3))
}

areaOfFigures(["triangle",
"4.5",
"20"]);