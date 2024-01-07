const {
  getFirestore,
  query,
  collection,
  getDoc,
  doc,
  DocumentReference,
} = require("firebase/firestore");
const firebaseApp = require("../../firebase");
async function getCart(req, res) {
  try {
    const { id } = req.user;
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, "users", id);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const productPromises = snap.data().cart.map(async (item) => {
        const productRef = item.product;
        const productSnap = await getDoc(productRef);
        const productObj = productSnap.data();
        const categoryRef = productObj.category;
        const categorySnap = await getDoc(categoryRef);

        productObj.category = categorySnap.data().categoryName;
        return {
          id: productSnap.id,
          amount: item.amount,
          ...productObj,
        };
      });
      const cart = await Promise.all(productPromises);
      res.status(200).send(cart);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = getCart;
