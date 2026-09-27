//Dates

const myDate = new Date

//Date methods
// console.log(myDate.toString())                //Indian Standard Time
// console.log(myDate.toDateString())            //  only date 
// console.log(myDate.toLocaleString())          //Simple Date and Time
// console.log(typeof(myDate))                   //Object

//Different Formats of created date 
// let myCreatedDate = new Date(2023, 0, 22)              //months starts with 0 in js
// let myCreatedDate = new Date(2023, 0, 22, 5, 4)        //creating date and time
// let myCreatedDate = new Date("2023-01-14")             //Here month starts with 1
let myCreatedDate = new Date("01-14-2023")              
// console.log(myCreatedDate.toLocaleString())

//TimeStamps
let myTimeStamps = Date.now()

console.log(myTimeStamps)  //value in milliseconds
// console.log(myCreatedDate.getTime()) //value in milliseconds from 1st jan 1970(standard)
// console.log(Math.floor(Date.now()/1000)) //value in seconds

//Some other Date Methods
let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getMonth() + 1)
console.log(newDate.getFullYear())

// '${newDate.getDay()} and the time is ${myDate.toTimeString()}'

//Important feature
console.log(newDate.toLocaleString('default', {
  weekday : "long"
}))


//Other time methods
// console.log(myDate.toTimeString())            //  Indian Standard Time
// console.log(myDate.toLocaleTimeString())      //Simple Time
// console.log(myDate.getTimezoneOffset())
