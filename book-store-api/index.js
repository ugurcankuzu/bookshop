//import
const express = require("express");
require("dotenv").config();
const firebaseApp = require("./firebase");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router");
//initializations
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api",router);

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
