const express = require("express")
const Router = express.Router()

const Teacherdata = [
    {
        id:1,
        name:'Basharat Khan',
        age:29
    },
    {
        id:2,
        name:'Shahid Khan',
        age:39
    },
    {
        id:3,
        name:'Basharat Afridi',
        age:27
    },
    {
        id:4,
        name:'Basharat Chaudary',
        age:33
    },
    {
        id:5,
        name:'Salem Shah',
        age:38
    },
]

//          Get Teachers

Router.get("/",(req,res) => {
    res.json(Teacherdata)
})

// Post Teachers


Router.post("/",(req,res) => {
    const body = req.body

    let keyArr = ["name","id"]
    let errArr = []

    keyArr.forEach((key) => {
        if(!body[key]){
            errArr.push(`${key} is missing!!!`)
        }
    })
    if(errArr.length > 0){
        res.json({
            message:errArr,
            success:false,
            data:null
        })
    }
    res.json(body)
})

module.exports = Router