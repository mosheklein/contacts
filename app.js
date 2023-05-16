const express = require('express')
const app = express()
const port = 7000

// const students = [
//     {id:'1', name:'x', email:'x@st'},{id:'2', name:'y', email:'y@st'},{id:'3', name:'z', email:'z@st'}
// ]

const db = require('./models');
const { student } = require('./models');

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync().then((data)=> {
    app.listen(port, () => console.log(`listening at  http://localhost:${port}`));
})   

app.set('view engine', 'ejs')

app.get('/students', (req, res) => {
    student.findAll().then( students => res.render('students',{students}))
})

app.get('/new-student', (req, res) => {
    res.render('new-student')
})

app.post('/students', (req, res) => {
   const newStudent = req.body
   student.create(newStudent).catch( e => console.log(e))
    res.send(newStudent)
})

app.delete('/students', (req, res) => {
    student.destroy({
        where:{},
        truncate:true
    })

    res.send('All Records have been deleted')
})

app.delete('/students/:id', (req, res) => {
    const studentID = req.params.id
    student.destroy({
        where:{id:studentID}
    })

    res.send({location:'/students'})
})

