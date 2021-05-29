// var strings1 = "single quote string";
// var string2 = "double quote string";

// var number1 = 24;
// var number2 = 32;
// var number3 = 0;

// var boolean = true;
// var boolean = false;

// Objects, string literals

// // var specialItems = document.getElementsByClassName("special");

// // specialItems[0].style = "background-color:red";

// var specialItems = document.querySelectorAll(".special");

// console.log(specialItems);

// // for loop
// for(var step = 0; step < specialElements.length; ++step) {
//   // loop body

//   var text = specialElements[step].innerText;

//   if(text == "Special 1" || text == "Special 4" || text == "Special 6") {
//     // condition body
//     specialElements[step].innerText += " edited"
//   }
// }

// alert(concatenatedString3)

// // EVENT LISTENERS

// function alertHandler() {
//   alert("The button was clicked")
// }

// var alertButton = document.getElementById("show-alert");
// alertButton.addEventListener('click', alertHandler)

function addPadding(id) {
  document.getElementById(id).style.padding = "20px";
}

function changeColor(id) {
  document.getElementById(id).style.color = "#e1e2ef";
  document.getElementById(id).style.backgroundColor = "grey";
}

function changeContent(id, content) {
  document.getElementById(id).innerHTML = content;
}

function applyAllStyle(elementId, content) {
  addPadding(elementId);
  changeColor(elementId);
  changeContent(elementId, content);
}

addPadding("btn1");
changeColor("btn1");

addPadding("btn2");
changeColor("btn2");

addPadding("btn3");
changeColor("btn3");

const addPaddingbtn = document.getElementById("btn1");
const changeColorbtn = document.getElementById("btn2");
const changeContencbtn = document.getElementById("btn3");

function paddingHandler() {
  addPadding("footer");
}

function colorHandler() {
  changeColor("footer");
}

function contentHandler() {
  changeContent("footer", "Site created by &copy; Evelyn Anyebe");
}

addPaddingbtn.addEventListener("click", paddingHandler);
changeColorbtn.addEventListener("click", colorHandler);
changeContencbtn.addEventListener("click", contentHandler);

// addPadding("label");

// addPadding("name");

// applyAllStyle("footer", "&copy Evelyn 2021");

// var greetingString = "Good morning";
// var name = "Frank Choogsaeng";

// var concatenatedString = greetingString + " - " + name;

// var concatenatedString2 = greetingString.concat(" ", name);

// var concatenatedString3 = `${greetingString}. How are you today`;

const image = document.getElementById("image"); // image element
const enlarge = document.getElementById("enlarge"); // enlarge button
const reset = document.getElementById("reset"); // reset button
const shrink = document.getElementById("shrink"); //shrink button

// Enlarge Handler & Event
function enlargeImage() {
  image.style.width = "400px";
  image.style.height = "400px";
}

enlarge.addEventListener("click", enlargeImage);

// Reset Handler & Event
function resetImage() {
  image.style = "";
}

reset.addEventListener("click", resetImage);

// Shrink Handler & Event
function shrinkImage() {
  image.style.width = "100px";
  image.style.height = "100px";
}

shrink.addEventListener("click", shrinkImage);
