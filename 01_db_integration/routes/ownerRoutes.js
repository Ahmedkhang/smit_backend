const express = require("express");
const supabase = require("../config/supabase");


const router = express.Router();

router.post("/",async (req,res) => {
  const { name, email, CNIC_num, total_cars} = req.body
 
  const { data, error} = await supabase.from('Owners').insert([
    {name,email,CNIC_num,total_cars}
  ]).select()
  
  if(error){
    return res.status(400).json()
  }

  res.status(201).json(data)
})

/* READ */
router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("Owners")
    .select("*");

  if (error) return res.status(400).json(error);

  res.json(data);
});
module.exports = router;
