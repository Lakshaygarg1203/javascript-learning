//OBJECT
//KEY VALUE

// const user = { //create
//   name: "Lakshay",
//   age:20,
//   emailID:"garglakshay808@gmail.com",
//   amount:342
// }
// console.log(typeof user);
// //CRUD operation: create read update delete
// console.log(user.age); //read

// user.aadhar = 1234;

// user.amount=3000;//update

// delete user.emailID; //delete
// console.log(user);






//VERY VERY IMPORTANT CONCEPT
//behind the scene, object stores its keys as STRINGS
// const user = { 
//   name: "Lakshay", //or     "name": "lakshay"
//   age:20,
//   emailID:"garglakshii808@gmail.com",
//   amount:342,
//   "homeAddress":"dwarka"
// }

// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["homeAddress"])





//OBJECT IS NON PRIMITIVE, CHANGE IN USER2 WILL AUTOMATICALLY CHANGE IN USER
// const user = { 
//   name: "Lakshay", //or     "name": "lakshay"
//   age:20,
//   emailID:"garglakshii808@gmail.com",
//   amount:342,
//   "homeAddress":"dwarka"
// }

// const user2 = user;
// user2.age = 90;
// console.log(user);




//FUNCTIONS IN OBJECTS
// const user = { 
//   name: "Lakshay", //or     "name": "lakshay"
//   age:20,
//   emailID:"garglakshii808@gmail.com",
//   amount:342,
//   greeting: function(){
//     console.log("hello i am lakshay");
//     return 20;
//   }  
// }

// const valu = user.greeting();
// console.log(valu);



//THIS KEYWORD: this keyword points to the object in which it is being used
//because if we use user2.age then it will take the age of user, so 'this' will help to access to use the age of user2

// const user = { 
//   name: "Lakshay", //or     "name": "lakshay"
//   age:20,
//   emailID:"garglakshii808@gmail.com",
//   amount:342,
//   greeting: function(){
//     console.log(`hello i am lakshay ${this.age}`);
//     return 20;
//   }  
// }

// const user2 = { 
//   name: "hola", //or     "name": "lakshay"
//   age:18,
//   emailID:"garglakshii808@gmail.com",
//   amount:342,
//   greeting: function(){
//     console.log(`hello i am lakshay ${this.age}`);
//     return 20;
//   }  
// }

// const valu = user2.greeting();
// console.log(valu);

// const valu1 = user.greeting();
// console.log(valu);




//nested object
// const user = { 
//   name: "Lakshay", //or     "name": "lakshay"
//   age:20,
//   emailID:"garglakshii808@gmail.com",
//   amount:342,
//   adress: {
//     city:"new delhi",
//     state: "delhi"
//   }

// }
// console.log(user.adress.city);




// what to do if we dont want both the users to point to same address location in memory
//for this we will use spread operator
// const user = { 
//   name: "Lakshay", //or     "name": "lakshay"
//   age:20,
//   emailID:"garglakshii808@gmail.com",
//   amount:342,
//   adress: {
//     city:"new delhi",
//     state: "delhi"
//   }
// }
//shallow copy
// const user2 = {...user}; //spread operator
// user2.name="MOHAN";
// user.adress.city="dwarka";//here we will see that spread operator does not work on
// //nested objects 

// console.log(user);

// console.log(user2);



// deep copy
//in this we will use structured clone
// const user2 = structuredClone(user);
// user2.adress.city="dwarka";
// console.log(user);
// console.log(user2);
// there is a limitation of deep copy that it cannot create a clone of functions used in object, it will give
//an error of datacloneerror.


//we can create a key with a number
//key: String || Symbol
// const sym = Symbol("id");
// const user = { 
//   name: "Lakshay", //or     "name": "lakshay"
//   age:20,
//   0: 100,
//   2: "Mohan",
//   // sym : "hello ji" // it will consider this as string, but we want it as symbol
//   [sym]:"hello ji "
// }
// console.log(user);
