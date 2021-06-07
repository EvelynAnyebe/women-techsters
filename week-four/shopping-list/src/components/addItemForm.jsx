import { useState } from "react";
import Button from "./button";

function AddItemForm({ addListItem }) {
  //Current form value state
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();
  const [titleInputError, setTitleInputError] = useState("");
  const [quantityInputError, setQuantityInputError] = useState("");
  const [descInputError, setDescInputError] = useState("");

  //Gaurd when typing to title input field
  const titleInputHandler = (e) => {
    e.preventDefault();
    if (e.target.value.trim().length < 3) {
      setTitleInputError("Title must be 3 letter above");
      return false;
    }

    setTitle(e.target.value);
    setTitleInputError("");
  };

  //Gaurd when typing to qunatity input
  const quantityInputHandler = (e) => {
    e.preventDefault();
    if (e.target.value % 1 != 0 || e.target.value <= 0) {
      setQuantityInputError("A whole number expected");
      return false;
    }
    setQuantity(parseInt(e.target.value));
    setQuantityInputError("");
  };

  //Gaurd when typing to description textarea
  const descInputHandler = (e) => {
    e.preventDefault();
    if (e.target.value.trim().length < 10) {
      setDescInputError("List item description should be 10 characters above");
      return false;
    }
    setDescription(e.target.value);
    setDescInputError("");
  };

  const submitHandler = (e) => {
    // Return a random integer from 1 to 1000
    const random = Math.floor(Math.random() * 1000);
    e.preventDefault();
    if (
      description.trim().length < 10 ||
      quantity % 1 != 0 ||
      quantity <= 0 ||
      title.trim().length < 3
    ) {
      setDescInputError("List item description should be 10 characters above");
      return false;
    }
    addListItem({ itemID: title + random, title, quantity, description });
  };

  return (
    <form id="add-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Item title"
        id="title"
        name="title"
        required
        autoComplete="off"
        onChange={titleInputHandler}
      />
      <input
        type="number"
        placeholder="Quantity"
        id="quantity"
        name="quantity"
        required
        onChange={quantityInputHandler}
      />
      <span id="titleError" className="error">
        {titleInputError}
      </span>
      <span id="quantityError" className="error">
        {quantityInputError}
      </span>
      <textarea
        placeholder="Description"
        id="description"
        name="description"
        required
        onChange={descInputHandler}
      ></textarea>
      <span id="descriptionError" className="error">
        {descInputError}
      </span>
      <Button value="+" id="add-btn" />
    </form>
  );
}

export default AddItemForm;
