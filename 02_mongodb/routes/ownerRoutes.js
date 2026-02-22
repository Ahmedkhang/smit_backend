const bcrypt =require("bcryptjs")
const express = require("express");
// const supabase = require("../config/supabase");
const ownerModel = require("../models/studentModel");
const { ResponseSuccess, ResponseError } = require("../helper_functions/helper_functions");


const router = express.Router();

// Query Parameter route

router.get("/search",(req,res) => {
  const { name } = req.query
  return res.json({
    isSucces:true,
    name
  }) 
})

// MongoDb Post Method


router.post("/",async (req,res) => {
  try{
    const body = req.body
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(body.password,salt)
    // console.log(hashedPassword);
    
    body.password = hashedPassword
    const obj = new ownerModel(body)
    await obj.save()
    return res.status(200).json(ResponseSuccess("Data Posted Successfully",body))

  }catch(err){
    return res.status(400).json(ResponseError("Internal Server Error",err))
  }
  
  
 
  // const { data, error} = await supabase.from('Owners').insert([
  //   {name,email,CNIC_num,total_cars}
  // ]).select()
  
  // if(error){
  //   return res.status(400).json()
  // }
  
})

// MongoDb Put Method

router.put("/:id", async (req,res) => {
  try{
    const id = req.params.id
    const body = req.body
    let existingId = await ownerModel.findById(id)
    if(existingId){
      let result = await ownerModel.findByIdAndUpdate(id,body,{
        new:true
      })

      return res.json(ResponseSuccess("Successfully Updated",result))
    }else{
      res.json(ResponseError("Not Found","404 Not Found"))
    }
  }catch(err){
     return res.json(ResponseError("Internal Server Error",err))
  }
})

// MongoDB Delete Method

router.delete("/:id",async(req,res) => {
  try{
    const id = req.params.id
    let existingId = await ownerModel.findById(id)
    if(existingId){
      let result = await ownerModel.findByIdAndDelete(id)

      return res.json(ResponseSuccess("Success, Data Deleted!",result))
    }else{
      return res.json(ResponseError("Internal Server Error","404 Data Not Found"))
    } 
  }catch(err){
    return res.json(ResponseError("Internal Server Error",err))
  }
})

// router.put("/:id",async(req,res) => {
//   const teacherId = req.params.id
//   const { name,email,CNIC_num,total_cars} = req.body

//   const {data,error} = await supabase.from('Owners').update({name,email,CNIC_num,total_cars}).eq("id",teacherId).select()
//   if(error){
//     console.log(error);
    
//     return res.status(400).json(error)
//   }
//   if(!data || data.length == 0){
//    return res.status(404).json()
//   }
//   res.json({
//     message:"Data Updated Successfully",
//     data
//   })
// }) 

/* READ */
router.get("/", async (req, res) => {
  try{

    const data = await ownerModel.find()
    res.status(200).json(ResponseSuccess("Success",data));
  }catch(err){
    res.status(400).json(ResponseError("Internal Server Error",err))
  }
});

// MongoDB dynamic route id function

router.get("/:id",async (req,res) => {
  try{
    const id = req.params.id
    const result = await ownerModel.findById(id)
    return res.status(200).json(ResponseSuccess("Data Loaded Successfully",result))
  }catch(err){
    return res.status(400).json(ResponseError("Internal server Error",err))
  }
})

// supabase dynamic route function


// router.get("/:id",async(req,res) => {
//   const id = req.params.id
//   const { data, error} = await supabase.from("Owners").select("*").eq("id",id).single()

//   if(error){
//     return res.status(400).json(error.message)
//   }
//   if(!data || data.length === 0){
//     return res.status(404).json({
//       message:"Could not Found Data"
//     })
//   }
//   res.json(data)
// })
module.exports = router;
