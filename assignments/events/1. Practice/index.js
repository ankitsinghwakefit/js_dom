//Select the section with an id of container without using querySelector.
var container = document.getElementById("container");

//Select the section with an id of container using querySelector.
var container1 = document.querySelector("#container");


//Select all of the list items with a class of "second".
var container2 = document.querySelectorAll(".second");


//Select a list item with a class of third, but only the list item inside of the ol tag.
var selector = document.getElementsByClassName("third")[1];
selector.style.color = "red";


//Give the section with an id of container the text "Hello!".
var para = document.createElement("p");
container.append("para");
para.innerHTML = "Helllo!";


//Add the class main to the div with a class of footer.
var foote = document.querySelector(".footer");
foote.classList.add("main");
// foote.setAttribute("class","main"); //-------------------------- it will overwrite


//Remove the class main on the div with a class of footer.
foote.removeAttribute("class");


//Create a new li element.
var newLi = document.createElement("li");
var ul = document.querySelector("ul");
ul.append(newLi);


//Give the li the text "four".
newLi.innerText="four";


//Append the li to the ul element.

var ul = document.querySelector("ul");

//Loop over all of the list inside the ol tag and give them a background color of "green".
var listItem = document.querySelectorAll("ol>li");
for(var items of listItem){
    items.style.backgroundColor = "green";
}

//Remove the div with a class of footer.
------------------------------------------- NO FOOTER LEFT :/
