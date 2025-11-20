//var let const
// declarations and initialisation
// var a = 12;



//Scope(global, block, functional)

//1)global scope
// var a = 12;
//----------------------------------------------

//2)block:-var block ko respect nahi karta, 
//block ke ander var khi bhi use ho sakta hai
// {
//   var b=344;
// }
// var b poore function mai use hoga

//



//LET IN BLOCK SCOPE
// {
// let a = 1122;
// }
//let respects the block, block ke ander ka let
//block ke ander hi use hoga 
//block ke bahar let use nhi hoga




//VAR IS FUNCTIONAL SCOPEd
// function abcd(){
//   var d = 1323;
// }
//var respects the functions, function ke ander var, sirf function k ander use hoga








//Reassignment , Redeclaration
// redeclaration is not possible for let, it is possible for var

//this will work 
var a = 12;
 a = 32;// -------->this is called reassign
var a = 233;//------>this is called redeclare


//this will be an error
let b = 12;
b=32;
let b =433;











//******TEMPORAL DEAD ZONE- utna area jitne mai js ko 
// ko pata to hai ki variable exist karta hai par wo aapko 
// value nahi de sakta********
console.log(fkf);
let fkf = 12;

//this will give us an error: "cannot access a before initialisation"
//javascript ko pata hai ki 'a' exist karta hai
//but vo tab bhi access karega


//TEMPORAL DEAD ZONE works for let const
//TEMPORAL DEAD ZONE does not work with var

console.log(jkd);
var jkd = 12;
//this will not create an error







//HOISTING IMPACT PER TYPE
// ***hoisting**** -->ek variable ko jab js mein banaate hai to wo
// variable do hisso mein toot jaata hai and uska declare part 
// upar chala jata and uska initialization part neeche reh jata hai


// hamare tutorial ke according,
//hoisting teeno types mai hoti hai 
//var --> hoist --> undefined
//let --> hoist --> value is not set
//const--> hoist --> const is not set


console.log(nm);
var nm = "Harsh"; /*how does it works?????
var console.log se upper chala gya because of hoisting
value of var will be set to undefined because of hoisting
and the code will look like this:-
var nm = undefined;
console.log(nm);
nm = "Harsh"; */



console.log(age);
let age = 25;
/* ****it will give reference error****, the code will look like this
let age = undefined;
console.log(age);
age = 25;*/



var x = 1; //global
{
  var x = 2; //var block ko respect nhi karte--->hence it is global
}
console.log(x);
/*var is functional scoped, var will consider blocked and global as global only
so we get the output = 2*/






let fck = 10; //global 
//let is a block scoped 
{
  let fck = 20; //block scoped hota hai let
  console.log("Inside:",fck);
}
console.log("Outside:",fck);

/*OUTPUT will be:-
Inside : 20
Outside: 10*/























