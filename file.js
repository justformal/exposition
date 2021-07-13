let S1rus = document.querySelector('.S1rus');
let T1rus = document.querySelector('.T1rus');
let F1rus = document.querySelector('.F1rus');
let S2rus = document.querySelector('.S2rus');
let F2rus = document.querySelector('.F2rus');
let T2rus = document.querySelector('.T2rus');
let buttonresultrus = document.querySelector('.buttonresultrus');
let buttonminrus = document.querySelector('.buttonminrus');
let buttonsecrus = document.querySelector('.buttonsecrus');
let buttonnextrus = document.querySelector('.buttonnextrus');
let buttonbackrus = document.querySelector('.buttonbackrus');
let S1desc = document.querySelector('.S1desc');
let T1desc = document.querySelector('.T1desc');    
let F1desc = document.querySelector('.F1desc');  
let S2desc = document.querySelector('.S2desc');
let F2desc = document.querySelector('.F2desc');
let part1desc = document.querySelector('.part1desc');   
let part2desc = document.querySelector('.part2desc');     
let resultdesc = document.querySelector('.resultdesc');
let tomenurus = document.querySelector('.tomenurus');
let tomenueng = document.querySelector('.tomenueng');
let toprogramrus = document.querySelector('.toprogramrus');
let toprogrameng = document.querySelector('.toprogrameng');
let ruslangbuttontoeng = document.querySelector('.ruslangbuttontoeng');
let ruslangbuttontorus = document.querySelector('.ruslangbuttontorus');
let englangbuttontoeng = document.querySelector('.englangbuttontoeng');
let englangbuttontorus = document.querySelector('.englangbuttontorus');
let page1rus = document.querySelector('.page1rus');
let page2rus = document.querySelector('.page2rus');
let page1eng = document.querySelector('.page1eng');
let page2eng = document.querySelector('.page2eng');
let buttonresulteng = document.querySelector('.buttonresulteng');
let buttonmineng = document.querySelector('.buttonmineng');
let buttonseceng = document.querySelector('.buttonseceng');
let buttonnexteng = document.querySelector('.buttonnexteng');
let buttonbackeng = document.querySelector('.buttonbackeng');
let background = document.querySelector('body');



let rusprog = document.querySelector('.rusprog');
let rusinfo = document.querySelector('.rusinfo');
let engprog = document.querySelector('.engprog');
let enginfo = document.querySelector('.enginfo');

let S1eng = document.querySelector('.S1eng');
let T1eng = document.querySelector('.T1eng');
let F1eng = document.querySelector('.F1eng');
let S2eng = document.querySelector('.S2eng');
let F2eng = document.querySelector('.F2eng');
let T2eng = document.querySelector('.T2eng');





function One() {T2rus.value = (+T1rus.value * ((+S2rus.value / +S1rus.value)*((+F2rus.value / +F1rus.value)**2))).toFixed(0); buttonminrus.hidden=false; buttonsecrus.hidden=true;};

function Two() {T2rus.value = (T2rus.value/60).toFixed(2); buttonminrus.hidden=true; buttonsecrus.hidden=false};

function Three() {T2rus.value = (T2rus.value*60).toFixed(0); buttonminrus.hidden=false; buttonsecrus.hidden=true};

function Four() {page1rus.hidden=true; page2rus.hidden=false;};

function Five() {page1rus.hidden=false;page2rus.hidden=true;};

function Six() {rusprog.hidden=true; rusinfo.hidden=false;};

function Seven() {rusprog.hidden=false; rusinfo.hidden=true;};

function Eight() {rusinfo.hidden=true; enginfo.hidden=false; englangbuttontoeng.hidden=true;};

function Nine() {rusinfo.hidden=false; enginfo.hidden=true; ruslangbuttontorus.hidden=true;};

function Ten() {enginfo.hidden=true; engprog.hidden=false;};

function Eleven() {enginfo.hidden=false; engprog.hidden=true;};

function Twelve() {T2eng.value = (+T1eng.value * ((+S2eng.value / +S1eng.value)*((+F2eng.value / +F1eng.value)**2))).toFixed(0); buttonmineng.hidden=false; buttonseceng.hidden=true;};

function Thirteen() {T2eng.value = (T2eng.value/60).toFixed(2); buttonmineng.hidden=true; buttonseceng.hidden=false};

function Fourteen() {T2eng.value = (T2eng.value*60).toFixed(0); buttonmineng.hidden=false; buttonseceng.hidden=true};

function Fifteen() {page1eng.hidden=true; page2eng.hidden=false;};

function Sixteen() {page1eng.hidden=false;page2eng.hidden=true;};






buttonresultrus.onclick = One;   

buttonminrus.onclick = Two;

buttonsecrus.onclick = Three;

buttonnextrus.onclick = Four;

buttonbackrus.onclick = Five;

tomenurus.onclick = Six;

toprogramrus.onclick = Seven;

ruslangbuttontoeng.onclick = Eight;

englangbuttontorus.onclick = Nine;

toprogrameng.onclick = Ten;

tomenueng.onclick = Eleven;

buttonresulteng.onclick = Twelve;   

buttonmineng.onclick = Thirteen;

buttonseceng.onclick = Fourteen;

buttonnexteng.onclick = Fifteen;

buttonbackeng.onclick = Sixteen;
