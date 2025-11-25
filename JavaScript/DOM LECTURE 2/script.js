var arr= [
  {
    team:'CSK',
    primary:'yellow',
    secondary:'blue'

  },
  {
    team:'RCB',
    primary:'red',
    secondary:'green'
  },

  {team:'MI',
    primary:'blue',
    secondary:'orange'
  },


  {team:'KKR',
    primary:'purple',
    secondary:'gold '
  },

  {
    team:'SRH',
    primary:'orange',
    secondary:'purple'
  },

  {
    team:'PBKS',
    primary:'crimson',
    secondary:'white'
  }

]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var main = document.querySelector('main')

btn.addEventListener('click',function(){
 var winner = arr[Math.floor(Math.random()*arr.length)];
  h1.innerHTML=winner.team;
  h1.style.backgroundColor = winner.secondary
  main.style.backgroundColor = winner.primary
})

