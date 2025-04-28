// Digital Clock
let ampm = document.getElementById('ampm');
function displayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    if (hr > 12) {
        ampm.innerHTML = "PM";
        hr = hr - 12; 
    } else {
        ampm.innerHTML = "AM";
    }
    document.getElementById('hours').innerHTML = padZero(hr);
    document.getElementById('mins').innerHTML = padZero(min);
    document.getElementById('seconds').innerHTML = padZero(sec);
}
function padZero(num) {
    return num < 10 ? "0" + num : num;
}
setInterval(displayTime, 500);

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

function pi() {
    displayInput.value += Math.PI.toFixed(8); 
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

//snowflakes
function createSnowflakes() {
    const snowContainer = document.createElement("div");
    snowContainer.classList.add("snow");
    document.body.appendChild(snowContainer);
  
    let cursorX = 0;
    let cursorY = 0;
  
    document.addEventListener("mousemove", (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
  
      const snowflakes = document.querySelectorAll(".snowflake");
      snowflakes.forEach((flake) => {
        const rect = flake.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - cursorX;
        const dy = rect.top + rect.height / 2 - cursorY;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < 50) {
          flake.remove(); 
        }
      });
    });
  
    function generateSnowflake() {
      const x = Math.random() * window.innerWidth;
      const y = -10; 
  
      const dx = x - cursorX;
      const dy = y - cursorY;
      const distance = Math.sqrt(dx * dx + dy * dy);
  
      if (distance < 60) return; 
  
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
  
      const size = Math.random() * 10 + 5;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${x}px`;
      snowflake.style.opacity = Math.random();
      snowflake.style.animationDuration = 8 + Math.random() * 7 + "s";
      snowflake.style.transition = "transform 0.5s ease, opacity 0.3s";
      snowflake.style.pointerEvents = "none";
  
      snowContainer.appendChild(snowflake);
  
      setTimeout(() => {
        snowflake.remove();
      }, 15000);
    }

    setInterval(generateSnowflake, 60);
  }
  
  createSnowflakes();