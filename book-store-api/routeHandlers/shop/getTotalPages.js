const {
  getFirestore,
  collection,
  getCountFromServer,
} = require("firebase/firestore");
const firebaseApp = require("../../firebase");

async function getTotalPages(req, res) {
  try {
    const db = getFirestore(firebaseApp);
    const limit = 10;
    const colRef = collection(db, "products");
    const snap = await getCountFromServer(colRef);
    const totalPages = Math.ceil(snap.data().count / limit);
    res.status(200).send({totalPages: totalPages});
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = getTotalPages;
