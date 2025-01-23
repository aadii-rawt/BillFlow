const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  const jwtToken = token.split(" ")[1]
  console.log(jwtToken);
  
  try {
    const decoded = jwt.verify(jwtToken,process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    req.userId = decoded._id
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
