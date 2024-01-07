const { getFirestore, doc, updateDoc } = require("firebase/firestore");
const firebaseApp = require("../../firebase");

async function saveCart(req, res) {
  try {
    const { id } = req.user;
    const { cart } = req.body;
    const db = getFirestore(firebaseApp);
    const refCart = []
    cart.forEach(item => {
        const docRef = doc(db,"products",item.id);
        refCart.push({product: docRef,amount: item.amount})
    })
    const docRef = doc(db, "users", id);
    await updateDoc(docRef, { cart: refCart });
    res.status(200);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = saveCart;
