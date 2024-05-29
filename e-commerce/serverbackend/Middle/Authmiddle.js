var jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const decoded = jwt.verify(token.split(" ")[1], "FullStack");
      if (decoded) {
        req.body.customerID = decoded.customerID;
        req.body.email = decoded.email;
        console.log(decoded, " codedde");
        next();
      } else {
        res.send({ msg: "please login !" });
      }
    } catch (err) {
      res.send({ msg: "Please Login!" });
    }
  } else {
    res.send({ msg: "please login !" });
  }
};

module.exports = {
  auth,
};
