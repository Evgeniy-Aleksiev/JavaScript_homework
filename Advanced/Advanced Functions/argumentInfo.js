function solve() {
    const params = Array.from(arguments);

    const types = {};

    for (let arg of params) {
        const  type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (types[type] == undefined) {
            types[type] = 0;
        } 
        types[type]++;
    }

    const result = Object.entries(types).sort((a, b) => b[1] - a[1])
    console.log(result);
}

solve(1, 2, 3);
solve('a', 'b', 'c')
