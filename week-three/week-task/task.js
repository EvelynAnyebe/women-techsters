const shoppingList = []; // Array of shopping items

const titleInput = document.getElementById("title");
const quantityInput = document.getElementById("quantity");
const descriptionInput = document.getElementById("description");
const addBtn = document.getElementById("add-btn");
const shoppingListContainer = document.getElementById("view-items");
const titleError = document.getElementById("titleError");
const quantityError = document.getElementById("quantityError");
const descriptionError = document.getElementById("descriptionError");

function updateDom(id) {
  for (let i = id; i < shoppingList.length; i++) {
    addShoppingItemToDom(i);
  }
}

function deleteShoppingItemHandler(e) {
  const parentElement = e.target.parentElement;
  const parentElementId = parseInt(parentElement.id);
  for (let i = parentElementId; i < shoppingList.length; i++) {
    shoppingListContainer.removeChild(document.getElementById(i));
  }
  shoppingList.splice(parentElementId, 1);
  updateDom(parentElementId);
}

// Add shopping item to dom
function addShoppingItemToDom(itemId) {
  // Get the item from shopping list array using the itemId parameter
  itemObject = shoppingList[itemId];

  // Create item element
  const divItemElement = document.createElement("div");
  divItemElement.className = "item";
  divItemElement.id = itemId;
  if (itemId > 0) {
    divItemElement.style.borderBottom = "1px solid #828282";
  }

  // Create div container
  const divElement = document.createElement("div");

  // Create h3, and 2 P elements
  const h3Element = document.createElement("h3");
  h3Element.innerText = itemObject.title;
  const descElement = document.createElement("p");
  descElement.innerText = itemObject.description;
  const quantityElement = document.createElement("p");
  quantityElement.className = "quantity";
  quantityElement.innerText = `Quantity: x${itemObject.quantity}`;

  // Create button
  const doneBtn = document.createElement("button");
  doneBtn.className = "btn";
  doneBtn.id = "add-btn";
  doneBtn.innerText = "Done";

  //Add event listener to button
  doneBtn.addEventListener("click", deleteShoppingItemHandler);

  // Append elements h3 and p to parent
  divElement.append(h3Element, descElement, quantityElement);

  // Append div element and done button to div item element
  divItemElement.append(divElement, doneBtn);

  // Prepend item to the top of list
  shoppingListContainer.prepend(divItemElement);
}

function resetForm() {
  titleInput.value = "";
  descriptionInput.value = "";
  quantityInput.value = "";
}

function addShoppingItemhandler() {
  // Validate input values first
  if (
    titleInput.value.trim().length < 3 ||
    !parseInt(quantityInput.value) ||
    descriptionInput.value.trim().length < 10
  ) {
    descriptionError.innerText = "All values are required";
    return null;
  }

  const shoppingItem = {
    title: titleInput.value,
    quantity: quantityInput.value,
    description: descriptionInput.value,
  }; // list item object

  // Add item to array
  shoppingList.push(shoppingItem);

  // Get the id of element to add to dom
  itemId = shoppingList.length - 1;

  // Add item to DOM
  addShoppingItemToDom(itemId);
  resetForm();
}

addBtn.addEventListener("click", addShoppingItemhandler);

// Validate title input
function titleHandler(e) {
  if (titleInput.value.trim().length < 3) {
    e.preventDefault();
    titleError.innerText = "Title must be 3 letter above";
  } else {
    titleError.innerText = "";
  }
}
titleInput.addEventListener("keyup", titleHandler);

// Handle quntity input
function quantityHandler(e) {
  // Checking for value here
  if (parseInt(quantityInput.value) != quantityInput.value) {
    e.preventDefault();
    console.log(parseInt(quantityInput.value));
    quantityError.innerText = "A whole number expected";
  } else {
    quantityError.innerText = "";
  }
}
quantityInput.addEventListener("keyup", quantityHandler);

// Handle description input
function descriptionHandler(e) {
  if (descriptionInput.value.trim().length < 10) {
    e.preventDefault();
    descriptionError.innerText =
      "List item description should be 10 characters above";
  } else {
    descriptionError.innerText = "";
  }
}

descriptionInput.addEventListener("keyup", descriptionHandler);
