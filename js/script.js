const btnup = document.querySelector('#btnup');
const btnlw = document.querySelector('#btnlw');

function toup(){
    const toUpperCaseText = document.querySelector('#texto').value.toUpperCase();
    if(toUpperCaseText){
        document.querySelector('#texto2').innerHTML = toUpperCaseText; 
    }else{
        document.querySelector('#texto2').innerHTML = 'insira um texto na caixa acima!';
    }
}
btnup.addEventListener('click', (toup));

function tolw(){
    const toLowerCaseText = document.querySelector('#texto').value.toLowerCase();
    if(toLowerCaseText){
        document.querySelector('#texto2').innerHTML = toLowerCaseText;
    }else{
        document.querySelector('#texto2').innerHTML ='insira um texto na caixa acima!';
    }
}
btnlw.addEventListener('click', (tolw));