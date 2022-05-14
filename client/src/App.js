import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);

  const addToList = () => {
    axios.post("http://localhost:3001/insert", {
      foodName: foodName,
      days: days,
    });
  };

  return (
    <div className="App">
      <header>
        <h1>CRUD App with MERN STACK</h1>
      </header>
      <main>
        <label>Food Name:</label>
        <input
          type="text"
          onChange={(e) => {
            setFoodName(e.target.value);
          }}
        />
        <label>Days Since You Ate It:</label>
        <input
          type="number"
          onChange={(e) => {
            setDays(e.target.value);
          }}
        />
        <button onClick={addToList}>Add To List</button>
      </main>
    </div>
  );
}

export default App;
