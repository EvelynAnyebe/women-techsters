import { useState } from "react";
import "./App.css";
import AddItemForm from "./components/addItemForm";
import ShoppingList from "./components/shoppingList";



function App() {

  const [list, setList] = useState([]);
  const [itemToEdit, setItemToEdit] = useState({});


  const addListItem = (item) => {
    
    let lastIndex=list.length;
    item.index=lastIndex;
    setList([...list, item]);
  };

  const editItem =()=>{
    console.log(itemToEdit);
  }

  const getToEditItem =()=>{
    return itemToEdit;
  }

  const handleItemToEdit=(item)=>{
    console.log(item);
    setItemToEdit(item);
  }


  return (
    <main>
      
      <section id="add-item">
      <h1>Add Item</h1>
        <AddItemForm addListItem={addListItem} editItem={editItem} getItemToEdit={getToEditItem}/>
      </section>
      <ShoppingList list={list} handleItemToEdit={handleItemToEdit}/>
    </main>
  );
}

export default App;
