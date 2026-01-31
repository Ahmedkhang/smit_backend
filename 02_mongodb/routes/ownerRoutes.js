const express = require("express");
// const supabase = require("../config/supabase");
const ownerModel = require("../models/studentModel");
const { ResponseSuccess, ResponseError } = require("../helper_functions/helper_functions");


const router = express.Router();

router.post("/",async (req,res) => {
  try{
    const body = req.body
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
