const {add,multiply,subtract,divide} =require('./calculator');


function calculateBiggerResult(a,b){
    return subtract(multiply(a,add(a,b)),2);
}

module.exports=calculateBiggerResult();