const express = require("express")
const supabase = require("../config/supabase")

const router = express.Router()

router.post("/", async (req,res) => {
    const {name,email} = req.body

    const {data,error} = await supabase.from("Renters").insert([{name,email}]).select()

    if(error){
        console.log(error);
        return res.status(400).json(error)
        
    }
    if(!data){
      return res.status(404).json(data)
    }

    res.json(data)
})

router.put("/:id",async(req,res) =>{
    const id = req.params.id
    const {name,email} = req.body
    const {data,error} = await supabase.from("Renters").update({name,email}).eq("id",id).select()
    if(error){
        return res.status(400).json()
    }
    if(data.length == 0){
        return res.status(404).json()
    }
    res.send(data)
})

router.get("/",async(req,res) => {
    const {data,error} = await supabase.from("Renters").select("*")
    if(error){
        return res.status(400).json()
    }
    if(data.length === 0){
        return res.status(404).json()
    }

    res.send(data)
})


router.get("/:id",async(req,res) => {
  const id = req.params.id
  const { data, error} = await supabase.from("Owners").select("*").eq("id",id).single()

  if(error){
    return res.status(400).json(error.message)
  }
  if(!data || data.length === 0){
    return res.status(404).json({
      message:"Could not Found Data"
    })
  }
  res.json(data)
})

module.exports = router