const {
  getFirestore,
  getDocs,
  query,
  collection,
  where,
  updateDoc,
  doc,
  serverTimestamp,
} = require("firebase/firestore");
const firebaseApp = require("../../firebase");
const bcrypt = require("bcrypt");
const createJWT = require("../../util/createJWT");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const db = getFirestore(firebaseApp);
      const q = query(collection(db, "users"), where("email", "==", email));
      const snap = await getDocs(q);
      if (!snap.empty) {
        const user = snap.docs[0].data();
        const compareResult = await bcrypt.compare(password, user.password);
        if (compareResult) {
          const jwt = createJWT({ id: snap.docs[0].id, email: user.email });
          await updateDoc(doc(db,"users",snap.docs[0].id),{last_login: serverTimestamp()})
          res.status(200).send(jwt);
        } else {
          res.status(401).send("Invalid Password");
        }
      } else {
        res.status(401).send("Invalid E-Mail");
      }
    } else {
      res.status(400).send("Fill E-mail and Password fields.");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = login;
