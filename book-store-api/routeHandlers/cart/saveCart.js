const { getFirestore, doc, updateDoc } = require("firebase/firestore");
const firebaseApp = require("../../firebase");

async function saveCart(req, res) {
  try {
    const { id } = req.user;
    const { cart } = req.body;
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, "users", id);
    await updateDoc(docRef, { cart: cart });
    res.status(200);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = saveCart;
