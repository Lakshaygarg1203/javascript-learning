//SELECTION OF AN ELEMENT
// var holaa = document.querySelector('h1')
// console.log(holaa);

// var holaaa = document.querySelector('h2')
// console.log(holaaa);


// //CHANGING HTML 
// var h1 = document.querySelector('h1')
// h1.innerHTML = 'changed'

// //CHANGING CSS
// var h1 = document.querySelector('h1')
// h1.innerHTML = 'Changed'
// h1.style.color = 'red'
// h1.style.backgroundColor = 'pink'


//EVENT LISTENER
// var h1 = document.querySelector('h1')
// // h1.innerHTML='Changed'//
// h1.style.color='gold'
// // h1.addEventListener('click') //ander ka part case sensitive hai
// //2 arguments are required in the add event listener
// h1.addEventListener('click',function(){
//   console.log('hello');
// })


// var h1 = document.querySelector('h1')
// var btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//   h1.innerHTML = 'I am King'
//   h1.style.color = 'red'
//   h1.style.fontSize = '60px'
// })




//GET ELEMENT BY ID
var a = 0;
var h2 = document.querySelector('h2')
var inc = document.querySelector('.inc');
var dec = document.querySelector('.dec');
var btn = document.querySelector('button')
inc.addEventListener('click',function(){
  a++;
  h2.innerHTML = a

})

dec.addEventListener('click',function(){
  a--;
  h2.innerHTML=a;
})


