const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mydatabse")
        console.log("Databse Connected Successfully");
        
    } catch (error) {
        console.log("Error");
        
        
    }
}

module.exports = connectDB; 