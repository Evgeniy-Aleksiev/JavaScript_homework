function timeToWalk(steps, footprintLegth, speedKM){
    let distance = steps * footprintLegth;
    let speed = speedKM * 1000 / 3600;
    let rest = Math.floor(distance / 500) * 60;
    let  time = (distance / speed) + rest;

    let hour = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    console.log(`${hour.toFixed(0).padStart(2, '0')}:${minutes.toFixed(0).padStart(2, '0')}:${seconds.toFixed(0).padStart(2, '0')}`);
};

timeToWalk(4000, 0.60, 5);