function fishTank(input){
    let tankVolume = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let volumeInLitters = tankVolume / 1000;

    console.log(volumeInLitters * (1 - Number(input[3]) / 100))
}

fishTank(["85 ", "75 ", "47 ", "17 "]);