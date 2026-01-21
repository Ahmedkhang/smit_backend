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

// dynamic routes of techer

Router.get("/:id",(req,res) => {
    const teacherId = req.params.id
    let result = Teacherdata.find((x) => x.id == teacherId)
    res.json(result)
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

// Delete Teacher

Router.delete("/:id",(req,res) => {
    const teacherId = req.params.id
    const index = Teacherdata.findIndex((x) => x.id == teacherId)
    console.log('Index No',index);
    
    const deletedTeacher = Teacherdata.splice(index,1)
    console.log('deletedTeacher',deletedTeacher);
    
    res.json({
        success:true,
        message:'Teacher deletEd Successfully1'
    })
})

module.exports = Router