const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  const tkn = req.headers.get("Authorization");
  const parsedTknString = tkn.split(" ");
  if (parsedTknString[0] === "Bearer") {
    const secret = process.env.JWT_SECRET_KEY;
    jwt.verify(parsedTknString[1], secret, (err, decoded) => {
      if (decoded) {
        req.body.userId = decoded.id;
        req.body.email = decoded.email;
        next();
      } else {
        return res.status(403);
      }
    });
  } else {
    res.status(401);
  }
}
