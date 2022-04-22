function timePlus15Min(input){
    let hour = Number(input[0]);
    let minutes = Number(input[1]) + 15;
    hour += Math.floor(minutes / 60)
    minutes %= 60

    if (hour > 23){
        hour -= 24
    }
    if (minutes < 9){
        console.log(`${hour}:0${minutes}`)
    } else {
        console.log(`${hour}:${minutes}`)
    }
}

timePlus15Min(["11", "08"]);
