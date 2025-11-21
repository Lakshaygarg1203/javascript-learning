//OBJECT
//KEY VALUE

const user = { //create
  name: "Lakshay",
  age:20,
  emailID:"garglakshay808@gmail.com",
  amount:342
}
console.log(typeof user);
//CRUD operation: create read update delete
console.log(user.age); //read

user.aadhar = 1234;

user.amount=3000;//update

delete user.emailID; //delete
console.log(user);
