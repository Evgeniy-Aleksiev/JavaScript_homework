function printContext(){
    console.log(a + b);
    console.log(this);
}

const obj = {
    counter: 5,
    printContext
};

printContext(3, 5)

printContext.apply(obj);



const obje = {
    name: 'Pesh',
    method() {
        const func = () => console.log(this);

        func();
    }
}

obje.method();

// currying

function sum3(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(sum3(5)(6)(8));