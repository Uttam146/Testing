const mathOperation = require('./calculator');

describe('Calculator tests',()=>{
    test("addition of two numbers",()=>{
        var results = mathOperation.add(1,2);
        expect(results).toBe(3);
    })
    test('subtract of two numbers',()=>{
        var results = mathOperation.subtract(3,5);
        expect(results).toBe(-2);
    })
    test('multiply of two numbers',()=>{
        var results = mathOperation.multiply(10,4);
        expect(results).toBe(40);
    })
    test('divide of two numbers',()=>{
        var results = mathOperation.divide(45,5);
        expect(results).toBe(9);
    })
    test('division of two numbers where devdend is zero',()=>{
        var result = mathOperation.divide(45,0);
        expect(result).toBe(Infinity);
    })
})