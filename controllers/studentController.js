// studetn_index, student_details, student_create_get,  student_create_post, student_delete
const { student } = require('./../models');

const studetn_index = (req, res) => {
    student.findAll().then( students => res.render('students',{students}))
}


const student_create_get = (req, res) => {
    res.render('new-student')
}


const student_details = (req, res) => {
    const studentID = req.params.id
    student.findAll({
        where:{id:studentID}
    }).then( data => res.send(data) )

    
}


const student_create_post = (req, res) => {
    const newStudent = req.body
    student.create(newStudent).catch( e => console.log(e))
     res.send(newStudent)
 }


 const student_delete =  (req, res) => {
    const studentID = req.params.id
    student.destroy({
        where:{id:studentID}
    })

    res.send({location:'/students'})
}

module.exports = {
    studetn_index,
    student_create_get,
    student_details,
    student_create_post, 
    student_delete
}