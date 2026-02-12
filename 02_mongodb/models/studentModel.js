const mongoose = require("mongoose")
const OwnerSchema = mongoose.Schema({
    ownerName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    ownerCnic:{
        type:Number,
        required:true
    }
})
const ownerModel = mongoose.model("owners",OwnerSchema)  
module.exports = ownerModel