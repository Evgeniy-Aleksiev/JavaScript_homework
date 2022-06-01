function solve(array){
    let obj = {}
    array.sort((a, b) => a.localeCompare(b));

    for (let iter of array){
        let [product, price] = iter.split(' : ');
        let capitalLet = product[0]
        price = Number(price)

        if (!obj.hasOwnProperty(capitalLet)){
            obj[capitalLet] = {}
        } 
        obj[capitalLet][product] = price
    }
    for (let letter of Object.keys(obj)){
        console.log(letter);
        for (const product of Object.keys(obj[letter])){
            console.log(`  ${product}: ${obj[letter][product]}`);
        }
    }
}

solve(['Banana : 2',
'Rubic's Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']

)