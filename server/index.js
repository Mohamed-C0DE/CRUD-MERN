const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const FoodModel = require("./models/Food");

// middleware
app.use(express.json());
app.use(cors());

// database connection
mongoose.connect(
  "mongodb+srv://newUser:znLwldaFTsJcP4Rt@crud.24e1n.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const foodName = req.body.foodName;
  const days = req.body.days;

  const food = new FoodModel({ foodName: foodName, daysSinceIAte: days });

  try {
    await food.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server running on PORT 3001");
});
