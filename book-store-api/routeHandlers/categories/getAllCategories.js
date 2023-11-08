const firebaseApp = require("../../firebase");
const { getDocs, collection, getFirestore } = require("firebase/firestore");

async function getAllCategories(req, res) {
  try {
    const db = getFirestore(firebaseApp);
    const snapshot = await getDocs(collection(db, "categories"));
    const data = [];
    snapshot.docs.map((doc) => data.push(doc.data()));
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = getAllCategories;
