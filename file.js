let S1 = document.querySelector('.S1');
let T1 = document.querySelector('.T1');
let F1 = document.querySelector('.F1');
let S2 = document.querySelector('.S2');
let F2 = document.querySelector('.F2');
let T2 = document.querySelector('.T2');
let button = document.querySelector('.buttonresult');
let buttonmin = document.querySelector('.buttonmin');
let buttonsec = document.querySelector('.buttonsec');
let buttonnext = document.querySelector('.buttonnext');
let buttonback = document.querySelector('.buttonback');
let S1desc = document.querySelector('.S1desc');
let T1desc = document.querySelector('.T1desc');    
let F1desc = document.querySelector('.F1desc');  
let S2desc = document.querySelector('.S2desc');
let F2desc = document.querySelector('.F2desc');
let part1desc = document.querySelector('.part1desc');   
let part2desc = document.querySelector('.part2desc');     
let resultdesc = document.querySelector('.resultdesc');
let menu = document.querySelector('.menu');


function One() {T2.value = (+T1.value * ((+S2.value / +S1.value)*((+F2.value / +F1.value)**2))).toFixed(0); buttonmin.hidden=false; buttonsec.hidden=true;};

function Two() {T2.value = (T2.value/60).toFixed(2); buttonmin.hidden=true; buttonsec.hidden=false};

function Three() {T2.value = (T2.value*60).toFixed(0); buttonmin.hidden=false; buttonsec.hidden=true};

function Four() {buttonnext.hidden=true; buttonback.hidden=false; S1.hidden=true; T1.hidden=true;F1.hidden=true;S1desc.hidden=true;T1desc.hidden=true;part1desc.hidden=true; F1desc.hidden=true; part2desc.hidden=false; S2desc.hidden=false;S2.hidden=false;F2desc.hidden=false; F2.hidden=false; button.hidden=false; T2.hidden=false; resultdesc.hidden=false; buttonmin.hidden=false; T2.value=0};

function Five() {buttonnext.hidden=false; buttonback.hidden=true; S1.hidden=false; T1.hidden=false;F1.hidden=false;S1desc.hidden=false;T1desc.hidden=false;part1desc.hidden=false; F1desc.hidden=false; part2desc.hidden=true; S2desc.hidden=true;S2.hidden=true;F2desc.hidden=true; F2.hidden=true; button.hidden=true; T2.hidden=true; resultdesc.hidden=true; buttonmin.hidden=true; buttonsec.hidden=true;};

function Six() {href='https://vk.com/id14538150'}


button.onclick = One;   

buttonmin.onclick = Two;

buttonsec.onclick = Three;

buttonnext.onclick = Four;

buttonback.onclick = Five;

menu.onclick = Five;
