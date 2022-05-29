function solve(array){
    const towns = {};

    for (element of array){
        let [town, population] = element.split(' <-> ');
        population = Number(population);

        if (towns[town] != undefined) {
            towns[town] += population; 
        } else {
        towns[town] = population;
        }
    }
    for (let line in towns){
        console.log(`${line} : ${towns[line]}`);
    }

}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
'Washington <-> 2345000']
)