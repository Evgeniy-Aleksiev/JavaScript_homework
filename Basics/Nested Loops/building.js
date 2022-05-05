function building(input){
    let floors = Number(input[0])
    let rooms = Number(input[1])

    for (let y = floors; y >= 1; y--){
        let text = ""
        for (let x = 0; x < rooms; x++){
            if (y === floors){
                text += `L${y}${x} `
            } else if (y % 2 === 0){
                text += `O${y}${x} `
            } else {
                text += `A${y}${x} `
            }
        }
        console.log(text)
    }
}

building(["9", "5"])