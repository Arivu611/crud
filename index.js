const express = require("express");
const cors = require("cors");

const counselingRoutes = require("./routes/studentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/students", counselingRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});