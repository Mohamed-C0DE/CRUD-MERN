const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://newUser:znLwldaFTsJcP4Rt@crud.24e1n.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.listen(3001, () => {
  console.log("Server running on PORT 3001");
});
