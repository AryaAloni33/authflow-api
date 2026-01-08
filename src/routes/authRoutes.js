const express = require("express")
const router = express.Router()

const {registerUser, loginUser} = require("../controllers/authController")
const protect = require("../middleware/authMiddleware")

router.post("/register" , registerUser)
router.post("/login" , loginUser)

//Protect Route
router.get("/profile" , protect ,(req,res)=>{
    res.status(200).json({message: "Profile accessed",
        user : req.user
    })
})



module.exports = router