const express = require('express')
const router = express.Router()
const { student } = require('./../models');
const studentController = require('./../controllers/studentController.js')

router.get('/', studentController.studetn_index)

router.get('/create', studentController.student_create_get)



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

module.exports = router
