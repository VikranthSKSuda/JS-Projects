const rollbutton = document.getElementById("Roll");
const Display = document.getElementById("myValue");

let randomNum;

rollbutton.onclick = function(){
    let min = Number(document.getElementById("minID").value);
    let max = Number(document.getElementById("maxID").value);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    Display.textContent = randomNum;


} /*This code is experimental and open source*/
