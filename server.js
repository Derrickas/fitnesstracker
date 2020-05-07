const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbworkouts", { useNewUrlParser: true });

app.use(require("./routes/html.js"))


app.listen(3000, () => {
    console.log("App running on port 3000!");
  });