function areaVol(areaIn, volIn, input){
    const data = JSON.parse(input);
    
    const result = []

    for (let cube of data){
        const currentResult = {
            area: areaIn.call(cube),
            volume: volIn.call(cube)
        };
        result.push(currentResult)
    }
    return result;
}

areaVol(area, vol , )

areaVol(area, vol)

function area() {
    return Math.abs(this.x * this.y)
}