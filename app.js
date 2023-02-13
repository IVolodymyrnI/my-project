require("dotenv").config({ path: "link.env" });
const routes = require("./routes/routes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//SERVER START
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

// DATA BASE SECTION
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

// ROUTES

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// CORPS

app.use(cors());
