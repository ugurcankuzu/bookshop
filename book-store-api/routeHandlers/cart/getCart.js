const {
  getFirestore,
  query,
  collection,
  getDoc,
  doc,
} = require("firebase/firestore");
const firebaseApp = require("../../firebase");
async function getCart(req, res) {
  try {
    const { id } = req.user;
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, "users", id);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      res.status(200).send(snap.data().cart);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = getCart;
