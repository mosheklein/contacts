// studetn_index, student_details, student_create_get,  student_create_post, student_delete
const { student } = require('./../models');

const studetn_index = (req, res) => {
    student.findAll().then( students => res.render('students',{students}))
}


const student_create_get = (req, res) => {
    res.render('new-student')
}

module.exports = {
    studetn_index,
    student_create_get
}