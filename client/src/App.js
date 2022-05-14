import { useState } from "react";
import "./App.css";

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);

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
        <button>Add To List</button>
      </main>
    </div>
  );
}

export default App;
