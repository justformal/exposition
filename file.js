let S1 = document.querySelector('.S1');
let T1 = document.querySelector('.T1');
let F1 = document.querySelector('.F1');
let S2 = document.querySelector('.S2');
let F2 = document.querySelector('.F2');
let T2 = document.querySelector('.T2');

let button = document.querySelector('.button');
button.onclick = function() 
{
T2.textContent = +T1.value * ((+S2.value / +S1.value)*((+F2.value / +F1.value)**2)); 
};