function solution() {
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const commands = {
        restock
    }

    return manager;

    function manager(line) {
        const [command, param, qty] = line.split(' ');
        return commands[command](param, qty);
    }

    function restock(type, qty) {
        stock[type] += Number(qty);
        return 'Success';
    }
}

let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
