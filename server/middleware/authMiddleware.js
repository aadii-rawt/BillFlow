const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const Auth = req.cookies
  console.log(Auth);
  
  // if (!Authorization) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }

  // jwt.verify(Authorization, "ukfhnsdfkjh", (err, decoded) => {
  //   if (err) {
  //     return res.status(403).json({ message: "Invalid or expired token" });
  //   }
  //   console.log("this is data ", decoded);
  next();
  // });
};

module.exports = authMiddleware;
