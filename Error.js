let a= undefined;
try{
    console.log(a.name);
}
catch(err){
    throw new TypeError('this is an error');
    console.log('this is an error');
}