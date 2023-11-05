const firebaseApp = require("../../firebase");
const {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} = require("firebase/firestore");
async function getProductsBySalecount(req, res) {
  try {
    const { order } = req.query;
    const db = getFirestore(firebaseApp);
    const q = query(
      collection(db, "products"),
      orderBy("saleCount", order),
      limit(5)
    );
    const snapshot = await getDocs(q);
    const data = [];
    snapshot.docs.map((doc) => data.push(doc.data()));
    res.status(200).send(data);
  } catch (e) {
    console.log("An Error Occured: " + e.message);
    res.status(500).send(e.message);
  }
}

module.exports = getProductsBySalecount;
