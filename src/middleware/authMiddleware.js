const jwt = require("jsonwebtoken")

// Middleware function
const protect = (req, res, next) => {
  let token

  // Authorization Header
  if (
    req.headers.authorization && // this checks if the header exists
    req.headers.authorization.startsWith("Bearer")
  ) {
    // if one of them fails user is not authenticated
    try {
      token = req.headers.authorization.split(" ")[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // Checks token signature, token expiry and decodes the payload

      req.user = decoded

      return next() // ✅ IMPORTANT: stop execution here
    } catch (error) {
      return res.status(401).json({ message: "Token Failed..." })
    }
  }

  // Debug logs (optional – keep during learning)
  console.log("AUTH HEADER:", req.headers.authorization)
  console.log("TOKEN:", token)
  console.log("JWT SECRET:", process.env.JWT_SECRET)

  // if no token is found then
  return res.status(401).json({ message: "No Token" })
}

module.exports = protect
