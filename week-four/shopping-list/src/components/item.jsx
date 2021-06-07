import { useState } from "react";
import Button from "./button";

function Item({itemID, title, description,quantity,editItem}) {
  /**This manages the status of an item whether active or done mode
    0 is done
1 is active */
  const [itemStatus, setItemStatus] = useState(true);
  const [itemClass, setItemClass] = useState("item");
  const [btnDisabbled, setBtnDisabbled]=useState("");
  const [itemValues, setItemValue]=useState({itemID, title, description,quantity})

  const handleItemStatus = ()=>{
    if(itemStatus){
      setItemStatus(!itemStatus);
      setItemClass("item-muted");
      setBtnDisabbled("disabled")
    }
    
  }

  const handleItemEdit =()=>{
    editItem(itemValues);
  }

  return (
    <div className={itemClass}>
      <div>
        <h3>{itemValues.title}</h3>
        <p>{itemValues.description}</p>
        <p className="quantity">Quantity: x{itemValues.quantity}</p>
      </div>
      <div>
      <Button value="Edit" btnDisabbled={btnDisabbled} handleClick={handleItemEdit} id={`btnEdit${itemValues.itemID}`}/>
      <Button value="Done" btnDisabbled={btnDisabbled} handleClick={handleItemStatus} id={`btnDone${itemValues.itemID}`}/>
      </div>
      
    </div>
  );
}

export default Item;
