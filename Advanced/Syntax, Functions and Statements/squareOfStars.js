function squareOfStars(input){
    for (let n = 1; n <= input; n++){
        let stars = ''
        for (let x = 1; x <= input; x++){
            stars += '* '
        }
        console.log(stars)
    }
        
};

squareOfStars(7)