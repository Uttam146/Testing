const fun = require('./main');
describe("Testing practice",()=>{
    // var person;
    // // beforeEach(()=>{
    // //     person = {
    // //         name:'uttam',
    // //         age:23
    // //     }
    // // })
    // //beforeeach is call before each and every test case
    // beforeAll(()=>{
    //     person = {
    //         name:'uttam',
    //         age:23
    //     }
    // })
    // //beforeAll is call before test suite.
    // test("Testing person name",()=>{
    //     expect(person.name).toEqual('uttam');
    // })
    // test("Testing person name",()=>{
    //     expect(person.name).toEqual('uttam');
    // })

///////////////////////////// Promise and async/await ////////////////////////
describe('Testing suit case',()=>{
    test('Testing Promise',()=>{
        return fun().then(data=>{
            expect(data).toBe(10);
        })
    })  
    test('Testing Promise',()=>{
        expect(fun()).resolves.toBe(10);
    }) 
    test('Testing async/await',async()=>{
       const result = await fun()
        expect(result).toBe(10);
    }) 
    test('Testing mock function',()=>{
        const mock = jest.fn();
        mock();
        mock();
        expect(mock).toHaveBeenCalledTimes(2);
     })

})

})