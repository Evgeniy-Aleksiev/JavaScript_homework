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

obje.method()