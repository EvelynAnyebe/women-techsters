import { useState } from "react";
import "./App.css";
import AddItemForm from "./components/addItemForm";
import ShoppingList from "./components/shoppingList";



function App() {

  const [list, setList] = useState([]);


  const addListItem = (item) => {
    setList([...list, item]);
  };

  const editItem =(item)=>{
    console.log(item);
  }

  return (
    <main>
      
      <section id="add-item">
      <h1>Add Item</h1>
        <AddItemForm addListItem={addListItem} editItem={editItem}/>
      </section>
      <ShoppingList list={list} editItem={editItem}/>
    </main>
  );
}

export default App;
