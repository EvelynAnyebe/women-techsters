// let name = "Frank Choongsaeng";
// let friendsList = [
//   "Ofoeze Ezichi",
//   "Mireldah",
//   "Queen",
//   "Remilekun"
// ]

// let eziName = "Ofoeze Ezichi";
// let eziAge = 16;
// let eziNationality = "Nigeria";

// // Object
// let eziData = {
//   name: "Ofoeze Ezichi",
//   email: "ofoeze.ezichi@womentechster.org",
//   age: 16,
//   nationality: "Nigeria",
//   hobbies: ["Singing", "Laughing", "Coding"],
//   dislikes: []
// }

// const input = document.getElementById("value")

// function handler(e) {
//   if(e.key == "@") {
//     e.preventDefault()
//     alert("You can't do that here")
//   }
// }

// input.addEventListener("keydown", handler)

const input = document.querySelector("#value"); // input el
const instruction = document.querySelector(".input-instruction"); // instruction element

function handler(e) {
  const acceptedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "_",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Backspace",
  ];

  console.log(e.key);

  if (!acceptedCharacters.includes(e.key)) {
    e.preventDefault();
    input.classList.add("error");
    instruction.style.visibility = "visible";
  } else {
    input.classList.remove("error");
    instruction.style.visibility = "hidden";
  }
}

input.addEventListener("keydown", handler);
