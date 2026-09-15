isthere=true;
function wait() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isthere){
                resolve('there is a product');
            }
            else{
                reject('there is no product');
            }
        },1000);
    });
}
function buy() {
    wait()
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log('go to the home page');
        });
}

buy();
