//document.querySelector('selector')
//document.querySelectorAll('selector')

//document.getElementById('id')
//document.getElementsByClassName('class')
//document.getElementsByTagName('tag')
//document.getElementsByName('name')

const h1 = document.querySelector('h1')
const paragraphs = document.querySelectorAll('paragraph')
const img = document.querySelector("#ueVarnaLogo")

h1.style.color='orange'
h1.style.fontSize='42px'
h1.style.backgroundColor='#333'

const body = document.querySelector('body')
body.style.backgroundColor = 'purple'
body.style.color = 'white'

paragraphs[0].className = 'paragraph yellow'
paragraphs[1].classList.add('yellow')
paragraphs[2].classList.remove('paragraph')
paragraphs[2].classList.add('green')


const h2 = document.createElement('h2')
h2.textContent = 'HEADING 2'

body.appendChild(h2)

body.removeChild(paragraphs[2])

const btn = document.querySelector('#bth')

btn.addEventListener('click', function () {
    console.log('Ти натисна бутона')
 })

 //Задача: Да се напише програма, която да сменя цвета на фона на произволен цвят при натискане на бутон:

//const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
  btn.addEventListener('click', () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  });
  


