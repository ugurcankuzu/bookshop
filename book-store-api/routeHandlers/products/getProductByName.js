const firebaseApp = require("../../firebase");
const {
  getFirestore,
  collection,
  query,
  where,
  limit,
  getDocs,
  getDoc,
} = require("firebase/firestore");

async function getProductByName(req, res) {
  try {
    const { productName } = req.params;
    const db = getFirestore(firebaseApp);
    const q = query(
      collection(db, "products"),
      where("productName", "==", productName)
    );
    const snapshot = await getDocs(q);
    let data = {};
    if (!snapshot.empty) {
      snapshot.docs.map(async (doc) => {
        const docObj = doc.data();
        const categoryNameRef = docObj.category;
        const categorySnap = await getDoc(categoryNameRef);
        docObj.category = categorySnap.data().categoryName;
        data = { ...docObj, id: doc.id };
        res.status(200).send(data);
      });
    } else {
      res.status(404).send([]);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = getProductByName;
