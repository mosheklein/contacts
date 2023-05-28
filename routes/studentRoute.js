const express = require('express')
const router = express.Router()
const { student } = require('./../models');
const studentController = require('./../controllers/studentController.js')

router.get('/', studentController.studetn_index)

router.get('/create', studentController.student_create_get)

router.get('/:id', studentController.student_details)


router.post('/', studentController.student_create_post)

router.delete('/', (req, res) => {
    student.destroy({
        where:{},
        truncate:true
    })

    res.send('All Records have been deleted')
})

router.delete('/:id',studentController.student_delete)





module.exports = router
