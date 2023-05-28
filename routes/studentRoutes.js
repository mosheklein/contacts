const express = require('express')
const router = express.Router()
const { student } = require('./../models');
const studentController = require('./../controllers/studentController')

router.get('/', studentController.student_index)
router.get('/:id', studentController.student_details)
router.get('/create', studentController.student_create_get)
router.post('/', studentController.student_create_post)
router.delete('/:id', studentController.student_delete)
router.put('/:id', studentController.student_update)

module.exports = router