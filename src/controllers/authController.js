const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const registerUser = async (req,res) =>{
     try{

        const {email, password } = req.body

        // Validate the Input

        if(!email || !password){
            return res.status(400).json({message:"Cannot be empty"})
        }

       // Check if the user already exists

       const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({
                message:"User already exists"
            }) // 409 is duplication
        }
        // Hash Password
        const hashPassword = await bcrypt.hash(password,10) 
     
        // Create User

        await User.create({
            email,
            password : hashPassword
        })

        // Send Response when user has been created

        res.status(201).json({message:"User registered successfully!!"})

    }
     catch(error){
        console.error("REGISTER ERROR OBJECT", error)
        console.error("REGISTER ERROR MESSAGE", error.message)
        console.error("REGISTER ERROR STACK", error.stack)
    
        res.error(500).json({message:"Internal Server Error"})
     }
}

const loginUser = async (req,res)=>{
    try{
        const {email ,password} = req.body

        if(!email || !password){
            return res.status(400).json({message:"Email and password is required"})
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({message:"Invalid Credentials"})
        }

        //Compare PASSWORD

   
        const isMatch = await bcrypt.compare(password , user.password)
        if(!user){
            return res.status(401).json({message:"Invalid Credentials!!"})
        }

        //JWT VERIFY

        const token = jwt.sign(
            { user_id : user._id , role: user._role}, process.env.JWT_SECRET,{expiresIn :"1h"}

            
           )
           res.status(200).json({message:"Login Successful!!",
            token : token
           })
    }
    catch(error){
 
        console.error("LOGIN ERROR OBJECT" ,error)
        console.error("LOGIN ERROR MESSAGE " , error.message)
        console.error("LOGIN ERROR STACK " , error.stack)
        res.status(500).json({message:"INTERNAL SERVER ERROR"})

    }
}



module.exports = {registerUser , loginUser}