const mongoose = require('mongoose')
const driverSchema = mongoose.Schema({
    driverName:{
        required:true,
        type:String
    },
    driverEmail:{
        type:String,
        required:true
    },
    driverPassword:{
        type:String,
        required:true
    }

})
const driverModel = mongoose.model("drivers",driverSchema)
module.exports = driverModel