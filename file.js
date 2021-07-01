let S1 = document.querySelector('.S1');
let T1 = document.querySelector('.T1');
let F1 = document.querySelector('.F1');
let S2 = document.querySelector('.S2');
let F2 = document.querySelector('.F2');
let T2 = document.querySelector('.T2');
let button = document.querySelector('.button');
let buttonmin = document.querySelector('.buttonmin');
let buttonsec = document.querySelector('.buttonsec');


function One() {T2.value = (+T1.value * ((+S2.value / +S1.value)*((+F2.value / +F1.value)**2))).toFixed(0); buttonmin.hidden=false; buttonsec.hidden=true;};
function Two() {T2.value = (T2.value/60).toFixed(2); buttonmin.hidden=true; buttonsec.hidden=false};
function Three() {T2.value = (T2.value*60).toFixed(0); buttonmin.hidden=false; buttonsec.hidden=true};


button.onclick = One;   

buttonmin.onclick = Two;

buttonsec.onclick = Three;
