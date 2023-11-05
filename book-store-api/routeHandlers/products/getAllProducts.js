const firebaseApp = require("../../firebase");
const { getFirestore, collection, getDocs } = require("firebase/firestore");

async function getAllProducts(req, res) {
  try {
    const db = getFirestore(firebaseApp);
    const snapshot = await getDocs(collection(db, "products"));
    const data = [];
    snapshot.docs.map((doc) => data.push(doc.data()));
    res.status(200).send(data);
  } catch (e) {
    console.log("Something went wrong:" + e.message);
    res.status(500).send("Error: " + e.message);
  }
}

module.exports = getAllProducts;
