const express = require("express")
const app = express()
const StudentRoute = require("./routes/student")
const TeacherRoute = require('./routes/teacher')
// const Teacherdata2 = require("./")
app.use(express.json())

app.use("/students",StudentRoute)
app.use("/teachers",TeacherRoute)
app.get('/',(req,res) => {
    res.send('Hey Basha')
})

app.listen(5000,() => {
    console.log('Server has started at : http://localhost:5000');
    
})