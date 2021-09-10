/* Array and Object
 09/09/2021

   Arrays are list objects [Shipping list]
   Arry is an object it's a type of object (array is special type of object)
   [] is shorthand for creating an empty array

------------------------------
   Objects are obvious for what they are
   You can see your television, car and all of the other ojects that you use throughout your daily life and they are obvious for what they are objects 
   Properties have a symbol name which point to a value in momery and we call these key names whenever those names are in an object 
   and the values are the values stored in memory and that together the key and value pair called the property

   {} is shorthand for creating an empty object. Not Curly braces mean everything is grouped together
 https://www.youtube.com/watch?v=FLGzeTHAbqQ
 https://www.youtube.com/watch?v=WOBlhuGHbdE
*/
const myCar = {
 brand: 'Toyota',
 model: 'Pruis',
 color: 'Silver',
 year: 2010,
 address: {
   BNo:'2008 N Ontario St', 
   City:'Corona', 
   State:'CA', 
   Zipcode: '90002'
  },
 oName:[
   'Mike', 
   'Tyson'
  ],
 getAge: function() 
 {
   return 2021 - this.year;
 }
} 

console.log(myCar.brand);
console.log(myCar.address.City);
console.log(myCar.oName[0]);
console.log(`my car age is = ${myCar.getAge()}`);
console.log(`myCar type is = ${typeof myCar}`);
console.log(`address type is = ${typeof  myCar.address}`);
console.log(`oName type is = ${typeof  myCar.oName}`);
console.log(`getAge type is = ${typeof  myCar.getAge}`);

for (let i in myCar) {
  console.log(i)
}

///////////////////////////////
// array have oject array and function

const myArray = [
  "desk", 
  {                         // No label for object array
    1: "small car", 
    2: "Truck"
  }, 
  "chair", 
  function()                 // No label for function
  {
    console.log("My function");
  }
];