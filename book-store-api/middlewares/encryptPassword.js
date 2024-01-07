const bcrypt = require("bcryptjs");

async function encryptPassword(req, res, next) {
  try {
    console.log(req.body)
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    next();
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = encryptPassword;