 function GetRandom(max, min) {
    return Math.ceil( Math.random() * (max - min) + min);
 }

const Seattle = {
   min: 23,
   max: 65,
   avg: 6.3,
   Location: "Seattle",
   hoursopen: ["6am", "7am" , "8am", "9am", "10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
   CustomerPerHour: function() {
      console.log(this.max);
      console.log(this.min);
      return GetRandom(this.max,this.min);
   },
   cookiesPerHour: [],

   GetCookies: function () {
      for(let i = 0; i < this.hoursopen.length; i++) {

         console.log("Seattle Avg Cookie Sales per hour is ",this.avg);

         console.log("Seattle amount of customers per hour is ",this.CustomerPerHour());

         this.cookiesPerHour.push(Math.ceil(this.avg * this.CustomerPerHour()));
      }
          
      return this.cookiesPerHour;
   
   }
}

const Tokyo = {
   Min: 3,
   Max: 24,
   avg: 1.4,
   Location: "Tokyo",
   hoursopen: ["6am", "7am" , "8am", "9am", "10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
   CustomerPerHour: function () {
      console.log(Tokyo.Max);
      console.log(Tokyo.Min);

      return GetRandom(this.Max,this.Min);
   },
   cookiesPerHour: [],

   GetCookies: function () {
      for(let i = 0; i < this.hoursopen.length; i++) {

         console.log("Tokyo Avg Cookie Sales per hour is ",this.avg);

         console.log("Tokyo amount of customers per hour is ",this.CustomerPerHour());

         this.cookiesPerHour.push(Math.ceil(this.avg * this.CustomerPerHour()));
      }
          
      return this.cookiesPerHour;
   
   }
}

const Dubai = {
   Min: 11,
   Max: 38,
   avg: 3.7,
   Location: "Dubai",
   hoursopen: ["6am", "7am" , "8am", "9am", "10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
   CustomerPerHour: function() {
      console.log(this.Max);
      console.log(this.Min);
      return GetRandom(this.Max, this.Min);
   }, 
   cookiesPerHour: [],
      
      GetCookies: function() {
         for(let i = 0; i < this.hoursopen.length; i++) {
   
            console.log("Dubai Avg Cookie Sales per hour is ",this.avg);
   
            console.log("Dubai amount of customers per hour is ",this.CustomerPerHour());
   
            this.cookiesPerHour.push(Math.ceil(this.avg * this.CustomerPerHour()));
         }
             
         return this.cookiesPerHour;
   }
}

const Paris = {
   Min: 20,
   Max: 38,
   avg: 2.3,
Location: "Paris",
hoursopen:["6am", "7am" , "8am", "9am", "10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
CustomerPerHour: function(){
   console.log(this.Max);
   console.log(this.Min);
   return GetRandom(this.Max, this.Min);

},
cookiesPerHour: [],
GetCookies: function () {
   for(let i = 0; i < this.hoursopen.length; i++) {

      console.log("Paris Avg Cookie Sales per hour is ",this.avg);

      console.log("Paris amount of customers per hour is ",this.CustomerPerHour());

      this.cookiesPerHour.push(Math.ceil(this.avg * this.CustomerPerHour()));
   }
       
   return this.cookiesPerHour;
}
}

const Lima = {
   Min: 2,
   Max: 16,
   avg: 4.6,
Location: "Lima",
hoursopen:["6am", "7am" , "8am", "9am", "10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
CustomerPerHour: function(){
   console.log(this.Max);
   console.log(this.Min)
   return GetRandom(this.Max, this.Min);
},
cookiesPerHour: [],
GetCookies: function () {
   for(let i = 0; i < this.hoursopen.length; i++) {

      console.log("Lima Avg Cookie Sales per hour is ",this.avg);

      console.log("Lima amount of customers per hour is ",this.CustomerPerHour());

      this.cookiesPerHour.push(Math.ceil(this.avg * this.CustomerPerHour()));
   }
       
   return this.cookiesPerHour;
}
}

// let hoursdemo = ["6am", "7am" , "8am", "9am", "10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
// let cookiedemo = [341, 202, 372, 284, 278, 334, 290, 322, 221, 404, 404, 221, 152, 278]
// let hoursArray = document.querySelector('.output')
// for(let i = 0; i < hoursdemo.length; i++){
//   // hoursdemo[i].innerHTML
//    let variable = document.createElement("li");
//    variable.innerHTML = `${hoursdemo[i]}: ${cookiedemo[i]} cookies`;
//    hoursArray.append(variable);

// }
const hoursopen = ["6am", "7am" , "8am", "9am", "10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
let cookieamount = [234, 252, 378, 353, 278, 177, 290, 265, 378, 334, 189, 297, 246, 385]
let hoursArray = document.querySelector('.output')
for(let i = 0; i < hoursopen.length; i++){
   let Seattle = document.createElement("li");
   Seattle.innerHTML = `${hoursopen[i]}: ${cookieamount[i]} cookies`;
   hoursArray.append(Seattle);
}; 

let cookieamountT = [12, 17, 24, 7, 24, 17, 6, 20, 24, 16, 30, 28, 16, 34]
let hoursArray2 = document.querySelector('.output2')
for(let i = 0; i < hoursopen.length; i++){
   let Tokyo = document.createElement("li");
   Tokyo.innerHTML = `${hoursopen[i]}: ${cookieamountT[i]} cookies`; 
   hoursArray2.append(Tokyo);
};

let cookieamountD = [97, 56, 49, 104, 45, 78, 137, 45, 56, 63, 100, 141, 86, 141]
let hoursArray3 = document.querySelector('.output3')
for(let i =0; i < hoursopen.length; i++){
   let Dubai = document.createElement("li");
   Dubai.innerHTML = `${hoursopen[i]}: ${cookieamountD[i]} cookies`;
   hoursArray3.append(Dubai);
};

let cookieamountP = [53, 81, 49, 69, 79, 72, 51, 76, 63, 56, 63, 86, 86, 56]
let hoursArray4 = document.querySelector('.output4')
for(let i = 0; i < hoursopen.length; i++){
   let Paris = document.createElement("li");
   Paris.innerHTML = `${hoursopen[i]}: ${cookieamountP[i]} cookies`;
   hoursArray4.append(Paris);
};

let cookieamountL = [42, 74, 46, 65, 65, 51, 74, 14, 60, 65, 42, 19, 51, 46]
let hoursArray5 = document.querySelector('.output5')
for(let i = 0; i < hoursopen.length; i++){
   let Lima = document.createElement("li");
   Lima.innerHTML = `${hoursopen[i]}: ${cookieamountL[i]} cookies`;
   hoursArray5.append(Lima);
}