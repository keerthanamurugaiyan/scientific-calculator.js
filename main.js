//Digital Clock
// let ampm=document.getElementById('ampm');
// function displayTime(){
//     let dateTime=new Date();
//     let hr=dateTime.getHours();
//     let min=dateTime.getMinutes();
//     let sec=dateTime.getSeconds();
//     if(hr>12){
//         ampm.innerHTML="PM";
//     }
//     document.getElementById('hours').innerHTML=padZero(hr);
//     document.getElementById('mins').innerHTML=min;
//     document.getElementById('seconds').innerHTML=sec;
// }
// function padZero(num){
//     return num<10?"0"+num:num
// }
// setInterval(displayTime,500)

//Calculator Functions
const displayInput=document.getElementById("displayInput");

function display(numValue){
    displayInput.value += numValue;
}
function clearDisplay(){
    displayInput.value="";
}
function sin(){
    displayInput.value=Math.sin(displayInput.value);
}

function cos(){
    displayInput.value=Math.cos(displayInput.value);
}
function tan(){
    displayInput.value=Math.tan(displayInput.value);
}
function pow(){
    displayInput.value=Math.pow(displayInput.value,2);
}
function e(){
    displayInput.value=Math.exp(displayInput.value);
}
function ln(){
    displayInput.value=Math.log(displayInput.value);
}

function percent(){
    displayInput.value=displayInput.value/100;
}
function sqrt(){
    displayInput.value=Math.sqrt(displayInput.value,2);
}
function log(){
    displayInput.value=Math.log10(displayInput.value);
}

function del(){
    displayInput.value=displayInput.value.substring(0,displayInput.value.length-1);
}
function calculate(){
    try{
        displayInput.value=eval(displayInput.value);
}
catch(error){
    alert("Invalid value");
}
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateFactorial() {
        const inputValue =displayInput.value;
        displayInput.value = factorial(inputValue);
    
}