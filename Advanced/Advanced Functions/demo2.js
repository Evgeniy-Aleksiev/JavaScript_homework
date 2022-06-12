function printContext() {
    inner();

    function inner() {
        console.log(this);
    }
}

const obj = {
    name: 'Gosho',
    printContext
};

obj.printContext();

