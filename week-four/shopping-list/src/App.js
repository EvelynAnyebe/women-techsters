import { useState } from "react";
import "./App.css";
import AddItemForm from "./components/addItemForm";
import ShoppingList from "./components/shoppingList";
import ShoppingListContext from "./components/shoppingListContext";

function App() {
  const [list, setList] = useState([]);
  const [itemToEdit, setItemToEdit] = useState({});

  const addListItem = (item) => {
    let lastIndex = list.length;
    item.index = lastIndex;
    setList([...list, item]);
  };

  const editItem = (item) => {
    const newList=list;
    newList[item.index]=item;
    console.log(newList);
    setList(newList);
  };


  

  return (
    <ShoppingListContext.Provider value={{itemToEdit, setItemToEdit}}>
      <main>
        <section id="add-item">
          <h1>Add Item</h1>
          <AddItemForm
            addListItem={addListItem}
            editItem={editItem}
          />
        </section>
        <ShoppingList list={list} />
      </main>
    </ShoppingListContext.Provider>
  );
}

export default App;
