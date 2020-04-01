/*function Embrasure(width, height, depth, location, elevation, reinforcement) {
  this.width = width;
  this.height = height;
  this.depth = depth;
  this.location = location;
  this.elevation = elevation;
  this.reinforcement = reinforcement;
}

var embrasure01 = new Embrasure(250, 300, 200, "floor", 1500, "normal");*/

const INPUTELEMENT = document.querySelector(".input");
const CARETBUTTON = document.querySelector(".signs p").children[1];
CARETBUTTON.addEventListener("click", toggle, false);

function toggle() {
if (CARETBUTTON.classList.contains("fa-caret-down")) {
  (function reveal() {
    let length = document.querySelectorAll(".input p").length - 1;
    document.querySelectorAll(".input p")[length].remove();
    document.querySelector(".input").style="none";
  for (var i = 1; i < (INPUTELEMENT.children.length); i++) {
    INPUTELEMENT.children[i].classList.toggle("hide");
  }
  CARETBUTTON.classList.remove("fa-caret-down");
  CARETBUTTON.classList.add("fa-caret-right");
})()
}
else if (CARETBUTTON.classList.contains("fa-caret-right")) {
  (function hide() {
  for (var i = 1; i < (INPUTELEMENT.children.length); i++) {
    INPUTELEMENT.children[i].classList.toggle("hide");
  }
  var newText = document.createTextNode("Проем " + document.getElementById("width").value + " x " + document.getElementById("height").value + " x " + document.getElementById("depth").value + " мм - " + document.querySelector(".count p").innerText + "шт.");
  var paragraphElement = document.createElement("p");
  paragraphElement.appendChild(newText);
  INPUTELEMENT.appendChild(paragraphElement);
  let length = document.querySelectorAll(".input p").length - 1;
  document.querySelectorAll(".input p")[length].style.alignSelf="center";
  document.querySelector(".input").style.cssText="background: #966B9D; color: #f3fffd; padding: 1px 0; text-shadow: none";
  CARETBUTTON.classList.remove("fa-caret-right");
  CARETBUTTON.classList.add("fa-caret-down");
})()
}}
