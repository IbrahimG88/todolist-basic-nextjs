import React, { useState } from "react";

export default function Home() {
  const [textItem, setTextItem] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleChange = (event) => {
    setTextItem(event.target.value);
  };

  const save = () => {
    const newTodoItems = [textItem, ...todoItems]; // Create a new array
    setTodoItems(newTodoItems);
    setTextItem("");
  };

  return (
    <div>
      Hello world!
      <br />
      <input
        type="text"
        placeholder="my text input"
        value={textItem}
        onChange={handleChange}
      />
      <br />
      <button onClick={save}>Save</button>
      <br />
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
