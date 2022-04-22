function bonusScore(points){
    let bonusPoints = 0

    if (points <= 100){
        bonusPoints += 5 
    } else if (points <= 1000){
        bonusPoints += points * 0.20
    } else {
        bonusPoints += points * 0.10
    }

    if (points % 2 == 0){
        bonusPoints += 1
    }

    if (points % 10 == 5){
        bonusPoints += 2
    }

    console.log(bonusPoints)
    console.log(bonusPoints + Number(points))
}

bonusScore(["15875"]);