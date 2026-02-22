const express = require("express")
const app = express()
const cors = require("cors");


// const supabase = require("@supabase/supabase-js")
const OwnerRoute = require("./routes/ownerRoutes")
const DriverRoute = require("./routes/driverRoutes")
// const RenterRoute = require("./routes/renterRoutes")
app.use(express.json())
app.use(cors()); // allow all origins (DEV MODE)

app.use('/owners',OwnerRoute)
app.use("/drivers",DriverRoute)
// app.use('/renters',RenterRoute)

require("dotenv").config()
console.log("Mongo URl",process.env.MONGODB_CONNECTION_URL);

const mongoose = require("mongoose");
// const loadenv = require("dotenv")

// loadenv()

mongoose.connect(
   process.env.MONGODB_CONNECTION_URL
)                                                                                    
.then(() => console.log("MongoDB Atlas connected"))
.catch(err => console.error(err));

app.get("/",(req,res) => {
  res.send("API Launched successfully")
})
app.listen('5000',() => {
  console.log("app running at 5000");
  
})