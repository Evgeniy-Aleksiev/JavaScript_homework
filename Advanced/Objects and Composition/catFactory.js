function solve(obj){
    let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power:200, volume:3500}];
    let carriage = [{type: 'hatchback', color: obj.color}, {type: 'coupe', color: obj.color}];
    let wheelsize = obj.wheelsize % 2 == 1 ? obj.wheelsize : obj.wheelsize -1;

    return {
        model: obj.model,
        engine: engines.filter(e => e.power >= obj.power)[0],
        carriage: carriage.filter(c => c.type == obj.carriage)[0],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));