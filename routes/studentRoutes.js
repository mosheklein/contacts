const express = require('express')
const router = express.Router()
const { student } = require('./../models');
const studentController = require('./../controllers/studentController')

router.get('/', studentController.student_index)
router.get('/:id', studentController.student_details)













router.get('/create', (req, res) => {
    res.render('new-student')
})

router.post('/', (req, res) => {
   const newStudent = req.body
   student.create(newStudent).catch( e => console.log(e))
    res.send(newStudent)
})

router.delete('/', (req, res) => {
    student.destroy({
        where:{},
        truncate:true
    })

    res.send('All Records have been deleted')
})

router.delete('/:id', (req, res) => {
    const studentID = req.params.id
    student.destroy({
        where:{id:studentID}
    })

    res.send({location:'/students'})
})




router.put('/:id', (req, res) => {
    const studentID = req.params.id // 1
    student.update({email:'s@gmail.com'},{where:{id:studentID}}).then( data => res.send(data))
})

module.exports = router