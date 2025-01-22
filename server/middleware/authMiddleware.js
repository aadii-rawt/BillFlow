const authMiddleware = (req,res,next) => {
    const Authorization = req.cookies.Authorization;

    if (!Authorization) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(Authorization, "ukfhnsdfkjh", (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'Invalid or expired token' });
        }
    
        const userId = decoded._id;
        res.json({ message: 'User-specific data', userId:userId});
        
      });
}

module.exports = authMiddleware

