const carService = require('./03. Car service_Resources');
const { assert } = require('chai');
 
describe('carService functions tests', () => {
    describe('test isItExpensive function', () => {
        it('should retunr a message when value of the parameter issue is equal to "Engine', () => {
            assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`);
        });
 
        it('should retunr a message when value of the parameter issue is equal to "Transmission', () => {
            assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`);
        });
 
        it('should retunr a message when value of the parameter issue is invalid', () => {
            assert.equal(carService.isItExpensive('Ball'), `The overall price will be a bit cheaper`);
        });
    });
 
    describe('test discount function', () => {
        it('should throw error with invalid parameters', () => {
            assert.throw(() => carService.discount('3', '5'), 'Invalid input');
        });
 
        it('should throw error with first invalid parameter', () => {
            assert.throw(() => carService.discount('3', 5), 'Invalid input');
        });
 
        it('should throw error with second invalid parameter', () => {
            assert.throw(() => carService.discount(3, '5'), 'Invalid input');
        });
 
        it('with number of parts is equal to 2', () => {
            assert.equal(carService.discount(2, 5), 'You cannot apply a discount');
        });
 
        it('with number of parts is less than 2', () => {
            assert.equal(carService.discount(1, 5), 'You cannot apply a discount');
        });
 
        it('with number of parts is more than 2', () => {
            assert.equal(carService.discount(5, 5), 'Discount applied! You saved 0.75$');
        });
 
        it('with number of parts is equal to 7', () => {
            assert.equal(carService.discount(7, 5), 'Discount applied! You saved 0.75$');
        });
 
        it('with number of parts is emore than 7', () => {
            assert.equal(carService.discount(8, 5), 'Discount applied! You saved 1.5$');
        });
    });
 
    describe('test partsToBuy function', () => {
        it('should throw error with invalid objects parameters', () => {
            assert.throw(() => carService.partsToBuy({}, {}), 'Invalid input');
        });
 
        it('should throw error with invalid stings parameters', () => {
            assert.throw(() => carService.partsToBuy('', ''), 'Invalid input');
        });
 
        it('should throw error with invalid parameters - string and object', () => {
            assert.throw(() => carService.partsToBuy('', {}), 'Invalid input');
        });
 
        it('should throw error with invalid parameters - object and string', () => {
            assert.throw(() => carService.partsToBuy({}, ''), 'Invalid input');
        });
 
        it('should return zero when the parts calatog is emtry', () => {
            assert.equal(carService.partsToBuy([], ["blowoff valve", "injectors"]), 0);
        });
 
        it('should return the right sum', () => {
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"]), 145);
        });
    });
 
});