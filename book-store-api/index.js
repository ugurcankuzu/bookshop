//import
const express = require("express");
require("dotenv").config();
const firebaseApp = require("./firebase");
const cors = require("cors");
const bodyParser = require("body-parser");
const {
  getFirestore,
  collection,
  doc,
  getDocs,
} = require("firebase/firestore");
//initializations
const app = express();
app.use(cors());
app.use(bodyParser.json());


app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
