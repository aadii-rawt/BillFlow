const authMiddleware = (req, res, next) => {
  const Authorization = req.cookies.Authorization;

  if (!Authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const jwtData = jwt.verify(Authorization, "ukfhnsdfkjh", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    console.log("this is data ",decoded);
    
  });

  
};

module.exports = authMiddleware;
