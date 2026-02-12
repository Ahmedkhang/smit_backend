const express = require("express")
const bcrypt = require("bcryptjs")
// const prisma = require("prisma")
const { PrismaClient } = require("@prisma/client");

const app = express()
app.use(express.json())
const prisma = new PrismaClient();


app.post("/users",async (req,res) => {
    try{
      const {username , password} = req.body
      const user = await prisma.user.create({
        data:{
            username,
            password
        },
    });
    res.json({
        message:"Success",
        user
    })
    }catch(error){
      res.json(error)
    }
})

app.get("/",(req,res) => {
    res.send("Hello")
})

app.listen(3000, () => {
console.log("Server running on port 3000 🚀");
});