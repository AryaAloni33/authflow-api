const express = require('express')
const app = express()
require("dotenv").config()

const connectDB = require("./config/connectionDB")
const authRoutes = require("./src/routes/authRoutes")
app.use(express.json())

app.use("/api/auth", authRoutes )

const PORT = process.env.PORT || 8000


app.get("/",(req,res) =>{
    res.send("Server Working...")
})

const startServer = async()=>{
    await connectDB()
    app.listen(PORT ,(error)=>{
        console.log(`Server is listening on port ${PORT}`)
    })
}
console.log("JWT SECRET:", process.env.JWT_SECRET);

startServer()

