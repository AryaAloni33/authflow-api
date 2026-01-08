const mongoose = require('mongoose')

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MONGODB Connected ...")
    }
    catch(error){
        console.error("MongoDB Connection Failed", error.message)
        process.exit(1)
    }

}
module.exports = connectDB