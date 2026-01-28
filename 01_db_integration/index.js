const express = require("express")
const app = express()
const supabase = require("@supabase/supabase-js")
const OwnerRoute = require("./routes/ownerRoutes")
const RenterRoute = require("./routes/renterRoutes")
app.use(express.json())

app.use('/owners',OwnerRoute)
app.use('/renters',RenterRoute)
app.get("/",(req,res) => {
  res.send("API Launched successfully")
})

app.listen('5000',() => {
  console.log("app running at 5000");
  
})