function sumSeconds(time){
    let totalTime = Number(time[0]) + Number(time[1]) + Number(time[2]);
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(["50",
"50",
"49"])
;
