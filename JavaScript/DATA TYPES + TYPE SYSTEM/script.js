//data type:- data ka type

/*primitives:- aisi saari values jinko copy karne par 
tumhe ek real copy mill jaye
STRING , NUMBER, BOOLEAN , NULL, UNDEFINED , SYMBOL, BIGINT



reference:- inko copy karne par real copy nahi millegi
but aapko reference millega parent ka
//ARRAYS, OBJECTS, FUNCTIONS
//[]       {}       ()
*/




//primitive
// let a = 12;
// let b  = a; 
// a = a + 2;




//reference
let al = [1,34,45];
let bl = al;
bl.pop();
/*bl point karta hai al ko, agar bl mai kuch change hoga to al
automatically change hoga*/





/*null ka matabl hai aapne jaan boojh kar koi value nahi di, 
aage jab zaroorat padegi tab aap khud value dedoge

undefined ka matlab hai ki aapne ek variable banaya aur usey value
nahi dii to jo value by default mili hai vo hoti h undefined*/

let bk; // the value of bk will be undefined
let dk = null;




//symbol ---> unique immutable value

/*future mai hum koi libraries use karenge ab is case mein un 
libraries mein kai baar hum kuchh fields hoti hai jinse similar hum bhi banaa dete hai 
aur galti se humaari banai hui fields us library ki original fields ko 
change kar deta hai*/

// let sheryjs = {
//   uid: 12,
//   model: "harsh",
// }
// sheryjs.uid="1";



//Number.Max_Safe_Integer karke ek function 




//BigInt
let a = 9007199254740991n;





//REFERENCE
//arrays
let akl = [1,2,3];
let bkl = akl;
bkl.pop();
//bkl point karta hai akl kooo 
//ek mai change karenge to doosre mai bhi change hoga 



//objects
let ckl = {
  name:"harsh",
};
let dkl = ckl;
dkl.name="harshita";
//dkl object point karta hai ckl ko 
//agar dkl mai change karenge to ckl mai bhi change hoga




/*DYNAMIC TYPING-->JS MAI STATIC TYPING NAHI HAI AND YAHA PAR 
HAI DYNAMIC TYPING*/

/*Dynamic typing ka matlab hai aap data ko change kar sakte ho kyuki taha par 
dynamic data types hai*/

let ab = 12;
ab=true;
ab=[1,2,4];
ab="lakshay";
ab=null;
ab=undefined;
/*kisi bhi type mai ek variable ko kitni bhi values de sakte hai*/








/*TYPEOF QUIRKS
typeof 12 ----> Number
typeof "lakshay"--->string



***************IMPORTANT QUIRKS:::::=====***********
typeof NaN -->NUMBER
Nan is considered as failed mathematical numerical operation hai 
typeof null---->Object*/



/*TYPE COHERSION(== VS ===)
TRUTHY VS FALSY VALUES

TYPE COHERSION-->CONCEPT JISMEIN AAPKA EK TYPE AUTOMATICALLY
CONVERT HOJAYEGA. FOR EXAMPLE

"5" + 1 //CONCATENATION


AGAR DONO OPERANDS MAI SE EK BHI OPERAND STRING
NIKAL GYA, TO + OPERATOR CONCATENATE KAREGA




"5"-1------>4
ISS CASE MAI CONTACATENATE VGRH NHI HOTA ISLIYE ISS CASE
MAI STRING NUMBER MAI CONVERT HOJAYEGA






//***********TRUTHY vs FALSY values*******
0 false "" null undefined NaN document.all-->in sab ki values false hoti hai 

NOTE: if(-1)--->iski value is truthy value





PRACTICE QUESTIONS:- PREDICT THE RESULT: 
true+false--->0+1=1
null+1--->0+1=1
5+"5"---->55
!!undefined----> FALSY VALUE



//UNDEFINED VS NULL 
let x;
console.log(x);//undefined
let y = null;
console.log(y);//null */


console.log(0.2+0.3===0.5);




