class CookieStand{
    constructor(min,max,avgSale){
this.min = min;
this.max = max;
this.avgSale = avgSale;
}
}
let Seattle = new CookieStand(23,65,6.3)
let Tokyo = new CookieStand(3,24,1.4)
let Dubai = new CookieStand(11,38,3.7)
let Paris = new CookieStand(20,38,2.3)
let Lima = new CookieStand(2,16,4.6)

 function CrowdperHour(max) {
    return Math.floor(Math.random() * max);
 }

 console.log(CrowdperHour(75))

//class Person{
   // constructor(age,name,height){
//this.age = age;

//this.name = name;

//this.height = height;
  //  }

    //Sing(){
    //console.log(Iamsinging)
//    }
//}

//let Mae = new Person("77","Mae","5'5")
//console.log(Mae.age)
//console.log(Mae.Sing)




//Tokyo 
//Dubai
//Paris
//Lima
