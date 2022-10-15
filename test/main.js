function fun(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10);
        },2000)
    });
}


module.exports =fun;