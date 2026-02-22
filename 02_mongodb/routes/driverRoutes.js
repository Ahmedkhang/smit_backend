const bcrypt = require("bcryptjs");
const express = require('express');
const driverModel = require("../models/driverModel");
const { ResponseSuccess, ResponseError } = require("../helper_functions/helper_functions");


const router = express()

router.post("/",async (req,res) => {
    try{
      const body = req.body
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(body.driverPassword,salt)
      body.driverPassword = hashedPassword

      const obj = new driverModel(body)
      await obj.save()

      return res.status(200).json(ResponseSuccess("Success",body))

    }catch(err){
       return res.status(400).json(ResponseError("Something Went Wrong",err))
    }
})

router.get("/",async (req,res) => {
    try{
      const data = await driverModel.find()
      return res.status(200).json(ResponseSuccess("Succes",data))
    }catch(err){
       return res.status(400).json(ResponseError("Something Went Wrong",err))
    }
})

module.exports = router