const express = require("express");
// const supabase = require("../config/supabase");
const ownerModel = require("../models/studentModel");


const router = express.Router();

router.post("/",async (req,res) => {
  const body = req.body
 
  // const { data, error} = await supabase.from('Owners').insert([
  //   {name,email,CNIC_num,total_cars}
  // ]).select()
  
  // if(error){
  //   return res.status(400).json()
  // }
  const obj = new ownerModel(body)
  await obj.save()
  .then((result) => {
    res.json({
      message:"Geo",
      success:true,
      data:result
    }).catch((err) = {
      message:"L",
      success:false,
      data:null
    })
  })

  res.status(201).json(data)
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
// router.get("/", async (req, res) => {
//   const { data, error } = await supabase
//     .from("Owners")
//     .select("*");

//   if (error) return res.status(400).json(error);

//   res.json(data);
// });

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
