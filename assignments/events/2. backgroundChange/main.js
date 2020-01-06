var body = document.querySelector("body");

var center = document.createElement("center");
document.body.append(center);

var div = document.createElement("div");
center.append(div);

var button = document.createElement("button");
div.append(button);
button.innerText = "Click Me! ";
button.style.width = "5rem";
button.style.height = "2rem";
button.style.backgroundColor = "orange";

var para = document.createElement("p");
div.prepend(para);

para.innerText = "Hiii... Click on button to change background color";
para.style.fontSize = "40px";
para.style.fontWeight = "800";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = color;
  }

var button1 = document.querySelector("button");
button1.addEventListener("click",getRandomColor);
 












