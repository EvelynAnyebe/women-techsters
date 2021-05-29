const friendsList = [];

const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const friendListContainer = document.getElementById("friend-list-container");

function deleteLiElement(e) {
  const parentElement = e.target.parentElement;
  friendListContainer.removeChild(parentElement);
  const parentElementId = parseInt(parentElement.id);
  friendsList.splice(parentElementId, 1);
  updateDom();
}

function updateDom() {
  friendListContainer.innerHTML = "";
  for (var idx = 0; idx < friendsList.length; ++idx) {
    // create a new li element
    const liElement = document.createElement("li");
    // set the innerText of the li element to the name of the friend
    liElement.innerText = friendsList[idx];
    // give the li element the same id as index
    liElement.id = idx;

    // create a new button
    const liButton = document.createElement("button");
    // set the innerText of the button to delete
    liButton.innerText = "delete";
    // add an event Listener to the button
    liButton.addEventListener("click", deleteLiElement);

    // add the button to the li element
    liElement.appendChild(liButton);

    // add the li element to the list container
    friendListContainer.appendChild(liElement);
    // reset the value of the input tag
    input.value = "";
  }
}

function addFriendHandler() {
  friendsList.push(input.value);
  updateDom();
}

addBtn.addEventListener("click", addFriendHandler);

// ANONYMOUS FUNCTIONS
// function() {

// }

// () => {

// }

// function handler() {

// }
// /** Anonymous function usage */
// element.addEventListener("click", function() {

// })

// element.addEventListener("click", () => {

// })
