import Item from "./item";

function ShoppingList({ list, editItem }) {
  return (
      
      
    <section id="view-items">
    <h1>My Shopping List</h1>
      {list.map((item) => {
        return (
          <Item
            key={item.itemID}
            itemID={item.itemID}
            title={item.title}
            description={item.description}
            quantity={item.quantity}
            editItem={editItem}
          />
        );
      })}
    </section>

  );
}

export default ShoppingList;
