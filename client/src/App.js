import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const [newFoodName, setNewFoodName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/read")
      .then((res) => {
        setFoodList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // Adding foodList below will cause page to rerender when new data is added to database
  }, [foodList]);

  const addToList = () => {
    axios.post("http://localhost:3001/insert", {
      foodName: foodName,
      days: days,
    });
  };

  const updateFood = (id) => {
    axios.put("http://localhost:3001/update", {
      id: id,
      newFoodName: newFoodName,
    });
  };

  const deleteFood = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`);
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

        <h2>Food List:</h2>
        {foodList.map((val, key) => {
          return (
            <div key={key}>
              {" "}
              <h3>{val.foodName}</h3>
              <h3>{val.daysSinceIAte}</h3>
              <input
                type="text"
                placeholder="New Food Name..."
                onChange={(e) => {
                  setNewFoodName(e.target.value);
                }}
              />
              <button onClick={() => updateFood(val._id)}>Update</button>
              <button onClick={() => deleteFood(val._id)}>Delete</button>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
