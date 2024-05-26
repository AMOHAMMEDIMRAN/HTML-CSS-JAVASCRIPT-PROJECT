const resultValue = document.querySelector("#result");

document.querySelector("#dice").addEventListener(
    "click" , function roll(){
    
    const calc = Math.round(Math.random()*6 +1);
    resultValue.textContent = calc;

});