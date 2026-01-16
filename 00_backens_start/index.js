const express = require("express")
const app = express()

app.get('/',(req,res) => {
    res.send('Hey Basha')
})

app.listen(5000,() => {
    console.log('Server has started at : http://localhost:5000');
    
})