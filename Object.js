let EngineDrive='petrol,diesel';
let car ={ 
    name:"Dharani",
    brand:"MD Creation",
    driveTrain: EngineDrive +',ev',
    price : 55,
    onRoad(){
        return this.price+2;
    }
};
console.log(car.name);
console.log(car.driveTrain);
console.log(car.onRoad(11));
/*for(key in car){
    console.log(key+'-'+car[key]);

}*/
