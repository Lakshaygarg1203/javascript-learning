var btn = document.querySelector('button')
var main = document.querySelector('main')
var arr = ['Hey! I am Lakshay', 'Lakshay is Best','Lakshay is Good','Lakshay is Handsome','Lakshay ki jai ho','JS is love','keep learning and practice']



btn.addEventListener('click',function(){
  var h1 = document.createElement('h1')
 
  var a = Math.floor(Math.random()*arr.length)
  h1.innerHTML=arr[a];
  var x = Math.random()*100
  var y = Math.random()*100
  var rot = Math.random()*180

  h1.style.color='pink'
  h1.style.position = 'absolute'
  h1.style.left = x+'%'
  h1.style.top=y+'%'
  h1.style.rotate = rot +'deg'

  main.appendChild(h1)
  
})