 function GetRandom(max, min) {
    return Math.ceil( Math.random() * (max - min) + min);
 }

 function CookieShop(min, max, avg, Location){
this.min = min
this.max = max
this.avg = avg
this.Location = Location
this.hoursopen= ["6am", "7am" , "8am", "9am", "10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
this.cookiesPerHour=[]
this.CustomerPerHour= function() {
   console.log(this.max);
   console.log(this.min);
   return GetRandom(this.max,this.min);
}
this.GetCookies= function () {
   for(let i = 0; i < this.hoursopen.length; i++) {

      console.log("Seattle Avg Cookie Sales per hour is ",this.avg);

      console.log("Seattle amount of customers per hour is ",this.CustomerPerHour());

      this.cookiesPerHour.push(Math.ceil(this.avg * this.CustomerPerHour()));
   }
       
   return this.cookiesPerHour;

}
this.Render= function (){
   // Create a TD for daily Total 
   // Add the cookiesold for the day
   // set to variable for daily total
   // set hmtl to that total variable  
   // insert td into row 
let CookieTable = document.getElementById("Cookies")
let row = document.createElement("tr")
let ShopName = this.Location
let ShopNameTd =document.createElement("td")
row.append(ShopNameTd)
ShopNameTd.innerHTML= ShopName
for(let i=0; i<this.cookiesPerHour.length; i++){
   let Cookiedata= document.createElement("td")
   Cookiedata.innerHTML=this.cookiesPerHour[i]
   row.append(Cookiedata)
}
table.append(row)
}}

// create Table 
// hoursopens is the 1st row
//each object has a row after and render its data
let table = document.createElement("table")
table.id = "Cookies"
let body = document.querySelector("body")
body.append(table)
let TRow = document.createElement("tr")
table.append(TRow)
let hoursopen= [" ","6am", "7am" , "8am", "9am", "10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
      for(let k=0; k < hoursopen.length; k++){
         let THeader = document.createElement("th")
         THeader.innerHTML= hoursopen[k]
         TRow.append(THeader)
      }
   


let Seattle = new CookieShop(23,65,6.5,"Seattle")
let Tokyo = new CookieShop(3, 24, 1.4 ,"Tokyo")
let Dubai = new CookieShop(11,38,3.7,"Dubai")
let Paris = new CookieShop(20, 38,2.3,"Paris")
let Lima = new CookieShop(2,16,4.6,"Lima")


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