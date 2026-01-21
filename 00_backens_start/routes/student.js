const express = require("express")
const Router = express.Router()

let data = [
    {
        id:1,
        name:'arsii',
        age:22,
        section:'A'
    },
    {
        id:2,
        name:"Kaleem",
        agew:29,
        section:'C'
    },
    {
        id:3,
        name:"Kaleem",
        agew:29,
        section:'C'
    },
    {
        id:4,
        name:"Kaleem",
        agew:29,
        section:'C'
    },
    {
        id:5,
        name:"Kaleem",
        agew:29,
        section:'C'
    },
    {
        id:6,
        name:"Kaleem",
        agew:29,
        section:'C'
    }
]

Router.get("/",(req,res) => {
    res.send(data)
})

Router.get("/",(req,res) => {
    let paramObj = req.query
    console.log(paramObj);
    res.json(data)
    // console.log(result);
     
    
})

Router.get('/:id',(req,res) => {
    let id = req.params.id
    console.log(id);
    let result = data.find((x) => x.id == id)

    res.json(result)
    
    
})

// Router.post("/",(req,res) => {
//     const body = req.body

//     let keyArr = ["name","age"]
//     let errArr = []

//     keyArr.forEach((key) => {
//         if(!body[key]){
//             errArr.push(`${key} is missing`)
//         }
//     })
//     if(errArr.length > 0){
//         res.json({
//             success:false,
//             message:errArr,
//             data:null
//         })
//     }
//     res.json(body)
// })

Router.post('/',(req,res) => {
    const body = req.body
    let keyArr = ["name","age"]
    let errArr = []
 
    keyArr.forEach((x) => {
        if(!body[x]){
            errArr.push(`${x} is missing!!`)
        }
    }) 
    if(errArr.length > 0){
        req.json({
            success:false,
            message:errArr,
            data:null
        })
    }

    res.json(body)

})
module.exports = Router