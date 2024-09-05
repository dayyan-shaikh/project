const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const User = mongoose.model("User",Userschema);

module.exports = User;