//Middle ware
const jwt = require('jsonwebtoken')
// const secret = "testjhjdksflslsfjksdfnj";
const secret = process.env.JWT_SECRET;
const auth = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }
      const isCustomAuth = token.length < 500;
      let decodedData;
      if (isCustomAuth) {
        try {
          decodedData = jwt.verify(token, secret);
          req.userId = decodedData?.id;
          req.userName = decodedData?.name;
          req.role = decodedData?.role;
          if (!req.role) {
            return res.status(403).json({ message: "User role not provided" });
          }
          if (req.role === "admin") {
            
            return adminMiddleware(req, res, next);
          }
        } catch (err) {
          if (err.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid token" });
          }
          if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired" });
          }
          throw err;
        }
      } else {
        return res.status(401).json({ message: "Invalid token format" });
      }
    } else {
      return res.status(401).json({ message: "Authorization header missing" });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const adminMiddleware = (req, res, next) => {
  if (req.role === "admin") {
    next();
  } else {

    return res.status(403).json({ message: "User is not an admin", user: req.userName });
  }
};
module.exports = {
    auth,
    adminMiddleware,
  };