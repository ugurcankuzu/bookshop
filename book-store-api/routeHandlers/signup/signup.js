const { getFirestore,addDoc,doc,collection } = require("firebase/firestore");
const firebaseApp = require("../../firebase");
const User = require("../../models/userModel");

async function signup(req,res){
    try{
        const {name,surname,password,email} = req.body;
        const userModel = new User(name,surname,email,password);
        const db = getFirestore(firebaseApp);
        const docRef = await addDoc(collection(db,"users"),userModel.ConvertToObject());
        res.send(docRef.id)
    }catch(e){
        res.status(500).send(e.message);
    }
}

module.exports = signup;