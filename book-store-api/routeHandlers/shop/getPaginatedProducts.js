const {
  getFirestore,
  collection,
  query,
  orderBy,
  startAt,
  startAfter,
  limit,
  where, // Ekledik
  getDocs,
  getDoc,
  doc,
} = require("firebase/firestore");
const firebaseApp = require("../../firebase");

async function getPaginatedProducts(req, res) {
  try {
    const db = getFirestore(firebaseApp);
    const itemPerPage = 10;
    const { page, category } = req.query; // Kategori bilgisini aldık
    const decodedCategoryName = decodeURI(category);
    if (parseInt(page, 10) > 0) {
      const colRef = collection(db, "products");
      let q;

      if (category) {
        const categoryRef = query(
          collection(db, "categories"),
          where("categoryName", "==", decodedCategoryName)
        );
        let categoryDocRef;
        const categorySnap = await getDocs(categoryRef);
        if (!categorySnap.empty) {
          categoryDocRef = categorySnap.docs[0].ref;
        } else {
          categoryDocRef = null;
        }
        q = query(
          colRef,
          where("category", "==", categoryDocRef), // Kategori filtresini ekledik
          orderBy("saleCount"),
          parseInt(page, 10) === 1
            ? startAt(1)
            : startAfter(parseInt(page, 10) * itemPerPage),
          limit(itemPerPage)
        );
      } else {
        q = query(
          colRef,
          orderBy("saleCount"),
          parseInt(page, 10) === 1
            ? startAt(1)
            : startAfter(parseInt(page, 10) * itemPerPage),
          limit(itemPerPage)
        );
      }

      const snap = await getDocs(q);

      if (!snap.empty) {
        const promises = snap.docs.map(async (doc) => {
          const data = {};
          const docObj = doc.data();
          const categoryNameRef = docObj.category;
          const categorySnap = await getDoc(categoryNameRef);
          docObj.category = categorySnap.data().categoryName;
          return { ...docObj, id: doc.id };
        });

        const referencedData = await Promise.all(promises);
        res.status(200).send(referencedData);
      } else {
        res.status(404).send([]);
      }
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = getPaginatedProducts;

/**
 * const {
  getFirestore,
  collection,
  query,
  orderBy,
  startAt,
  startAfter,
  limit,
  getDocs,
  getDoc,
} = require("firebase/firestore");
const firebaseApp = require("../../firebase");

async function getPaginatedProducts(req, res) {
  try {
    const db = getFirestore(firebaseApp);
    const itemPerPage = 10;
    const { page } = req.query;
    if (parseInt(page, 10) > 0) {
      const colRef = collection(db, "products");
      const q = query(
        colRef,
        orderBy("saleCount"),
        parseInt(page, 10) === 1
          ? startAt(1)
          : startAfter(parseInt(page, 10) * itemPerPage),
        limit(itemPerPage)
      );
      const snap = await getDocs(q);
      if (!snap.empty) {
        const promises = snap.docs.map(async (doc) => {
          const data = {};
          const docObj = doc.data();
          const categoryNameRef = docObj.category;
          const categorySnap = await getDoc(categoryNameRef);
          docObj.category = categorySnap.data().categoryName;
          return { ...docObj, id: doc.id };
        });

        const referencedData = await Promise.all(promises);
        res.status(200).send(referencedData)
      } else {
        res.status(404).send([]);
      }
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = getPaginatedProducts;

 */
