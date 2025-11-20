// let arr = [100,30,"Rohit",true];
// console.log(arr[2]);
// // arr[1]=90;
// // console.log(arr[1]);


// //push--->last se enter karna 
// //pop--->delete element from end
// arr.push(90);
// arr.push("strike");
// console.log(arr);

// //starting add kar sakta hu, delete the element at first place
// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

// arr.shift();//delete the element from first place
// arr.shift();
// console.log(arr);
// //shift and unshift are not advisable as they hampers the performance



// let arr = [10,30,50,90,11];
// for(let i =0;i<arr.length;i++){
//   console.log(arr[i]);
// }


//for of loop
// for(let num of arr){
//  console.log(num);
// }


// let arr = [10,30,50,90,11];
// let arr2 = arr;
// arr2.pop();
// console.log(arr); //arr2 mai change hua h to arr mai bhi change hojayega
//because arr2 ka address points to arr ka address, thats why arr mai bhi change hoga when we cange arr2

// let a = 5 ; 
// let b = a;
//dono ke addresses alag alag hai, to agar b mai koi change karenge 
//tab bhi a mai change nhi hoga



//USING CONST IN ARR
// const arrr = [10,20,30,203];
// arrr=[10,20,40];
// console.log(arrr);
//this is not acceptable, it will give an error
//const ko hum update ni krstke
//iska mtlb hi constant hota hai bas





//MAIN CRUX:-
//OBJECT, ARRAYS(NON PRIMITIVE):- COPY BY REFERENCE HOTE HAI 
//PRIMITIVE:- COPY BY VALUE HOTE HAI 



// //SLICE 
// const arr = [10,30,50,90,11];
// console.log(arr.slice(2,4));
// //slice(a,b) ka mtlb hai a include hoga hi hoga
// // b include nhi hoga usse pehle tak jitne bhi element hai vo include honge
// //slice original array mai koi change nhi karta







// //SPLICE
// console.log(arr.splice(1,3));
// //splice(a,b) ka mtlb hai a include hoga, b bhi include hoga
// //splice original array ko change kardeta hai
// console.log(arr);




// const arr = [10,30,50,90,11];
// const arr2 = ["rohit",11,true];
// const arr4 = [90,4,false];
// arr.push(arr2);
// console.log(arr);
//console par ye aaya hai (6) [10, 30, 50, 90, 11, Array(3)]

// const arr3 = [arr, arr2,arr4];
// console.log(arr3);
// jab arr3 banega, to vo har array ko ek element ki trh count karega
//so in this case arr3 will have 3 elements only
// .
// .
// .
// .
//SPREAD OPERATOR
// const arr3 =[...arr,...arr2,...arr4];
// console.log(arr3);



//ARRAYS ACTING AS OBJECTS
const a = [10,31,"rohit",9.3,true];
console.log(a["0"]);
//par ye cheez to objects mai hoti h

//hum isme a.name ka use karskte h jo object ki property h 
a.name="lakshay";
console.log(a);
//(5) [10, 31, 'rohit', 9.3, true, name: 'lakshay']