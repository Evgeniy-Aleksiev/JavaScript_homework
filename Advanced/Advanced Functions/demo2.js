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


const objs = {
    name: 'Goshko',
    outer() {
        console.log(this)
        function inner() {console.log(this);}
        inner()
    }
}

objs.outer();