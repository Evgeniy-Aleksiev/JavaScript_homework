function roadRadar(currentSpeed, area){;
    let difference = 0;
    let isOverLimit = false;
    let speedLimit = 0

    if (area == 'motorway'){
        speedLimit = 130;
        if (currentSpeed > 130){
            difference = currentSpeed - 130;
            isOverLimit = true;
        };

    } else if (area == 'interstate'){
        speedLimit = 90;
        if (currentSpeed > 90){
            difference = currentSpeed - 90;
            isOverLimit = true;
        };

    } else if (area == 'city'){
        speedLimit = 50;
        if (currentSpeed > 50){
            difference = currentSpeed - 50;
            isOverLimit = true;
        };

    } else if (area == 'residential'){
        speedLimit = 20;
        if (currentSpeed > 20){
            difference = currentSpeed - 20;
            isOverLimit = true;
        };

    };

    if (isOverLimit){
        let status = ''
        if (difference <= 20){
            status = 'speeding'
        } else if (difference <= 40){
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    } else {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
    }
}

roadRadar(200, 'motorway');