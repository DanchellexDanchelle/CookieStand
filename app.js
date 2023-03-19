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
   
   },
    Render: function (){
      // create unorder list 
      // create listed item for each cookiesPerHour
      // instert list item into ul 
      // instert ul into body 
   let list = document.createElement("ul")
   let header = document.createElement("h1")
   header.innerHTML = this.Location
   let body = document.querySelector("body")
   body.append(header)
      for(let i=0; i < this.cookiesPerHour.length; i++){
         let listitem = document.createElement("li")
         listitem.innerHTML= this.hoursopen[i]+": "+this.cookiesPerHour[i]
         list.append(listitem)
      }
     
     body.append(list)
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
   
   },
   Render: function (){
      // create unorder list 
      // create listed item for each cookiesPerHour
      // instert list item into ul 
      // instert ul into body 
   let list = document.createElement("ul")
   let header = document.createElement("h1")
   header.innerHTML = this.Location
   let body = document.querySelector("body")
   body.append(header)
      for(let i=0; i < this.cookiesPerHour.length; i++){
         let listitem = document.createElement("li")
         listitem.innerHTML= this.hoursopen[i]+": "+this.cookiesPerHour[i]
         list.append(listitem)
      }
     body.append(list)
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
   },
   Render: function (){
      // create unorder list 
      // create listed item for each cookiesPerHour
      // instert list item into ul 
      // instert ul into body 
   let list = document.createElement("ul")
   let header = document.createElement("h1")
   header.innerHTML = this.Location
   let body = document.querySelector("body")
   body.append(header)
      for(let i=0; i < this.cookiesPerHour.length; i++){
         let listitem = document.createElement("li")
         listitem.innerHTML= this.hoursopen[i]+": "+this.cookiesPerHour[i]
         list.append(listitem)
      }
     body.append(list)
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
},
Render: function (){
   // create unorder list 
   // create listed item for each cookiesPerHour
   // instert list item into ul 
   // instert ul into body 
let list = document.createElement("ul")
let header = document.createElement("h1")
header.innerHTML = this.Location
let body = document.querySelector("body")
body.append(header)
   for(let i=0; i < this.cookiesPerHour.length; i++){
      let listitem = document.createElement("li")
      listitem.innerHTML= this.hoursopen[i]+": "+this.cookiesPerHour[i]
      list.append(listitem)
   }
  body.append(list)
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
},
Render: function (){
   // create unorder list 
   // create listed item for each cookiesPerHour
   // instert list item into ul 
   // instert ul into body 
let list = document.createElement("ul")
let header = document.createElement("h1")
header.innerHTML = this.Location
let body = document.querySelector("body")
body.append(header)
   for(let i=0; i < this.cookiesPerHour.length; i++){
      let listitem = document.createElement("li")
      listitem.innerHTML= this.hoursopen[i]+": "+this.cookiesPerHour[i]
      list.append(listitem)
   }
  body.append(list)
 }
}

Seattle.GetCookies()
Seattle.Render()

Tokyo.GetCookies()
Tokyo.Render()

Dubai.GetCookies()
Dubai.Render()

Paris.GetCookies()
Paris.Render()

Lima.GetCookies()
Lima.Render()