import { useState } from "react";


function ListOfThings() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
  
    const addItem = event => {
      event.preventDefault();
      setItems([
        ...items,
        {
          id: items.length,
          name: itemName
        }
      ]);
      setItemName("");
    };
  
    return (
      <>
        <form onSubmit={addItem}>
          <label>
            <input
              name="text"
              type="text"
              value={itemName}
              onChange={e => setItemName(e.target.value)}
            />
          </label>
        </form>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </>
    );
  }

  export default ListOfThings;