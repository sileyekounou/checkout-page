// Achat Vintage Backag

var total = 148.98
const result = document.querySelector('#result')
result.innerHTML = `$ ${total}`

//Déclaration des variables
const btnPlusVint = document.querySelector('#plusVint');
const btnMoinsVint = document.querySelector('#moinsVint');
const countVint = document.querySelector('#counterVint');

let i = 1;
var vintPrice = 54.99;

countVint.innerHTML = i;

btnPlusVint.addEventListener('click', () => {
  i++;  
  countVint.innerHTML = i;
  vintPrice += 54.99  
  total += 54.99
  result.innerHTML = `$ ${total.toFixed(2)}`;
})

btnMoinsVint.addEventListener('click', () => {
  if (i == 1) {
    vintPrice = 0
    countVint.innerHTML = i;    
  } else if (i >= 2) {
    i--;
    vintPrice -= 54.99
    total -= 54.99
    countVint.innerHTML = i;
    result.innerHTML = `$ ${total.toFixed(2)}`;   
  }
})

// Achat Levi Shoes

var leviPrice = 74.99;


const btnPlusLevi = document.querySelector('#plusLevi');
const btnMoinsLevi = document.querySelector('#moinsLevi');
const countLevi = document.querySelector('#counterLevi');

let j = 1;
countLevi.innerHTML = j;

btnPlusLevi.addEventListener('click', () => {
  j++;  
  countLevi.innerHTML = j;
  leviPrice += 74.99;
  total += 74.99
  result.innerHTML = `$ ${total.toFixed(2)}`;  
})

btnMoinsLevi.addEventListener('click', () => {
  if (j == 1) {
    leviPrice = 0
    countLevi.innerHTML = j;  
  } else if (j >= 2) {
    j--;
    leviPrice -= 74.99
    total -= 74.99
    countLevi.innerHTML = j;  
    result.innerHTML = `$ ${total.toFixed(2)}`;
  }
})

