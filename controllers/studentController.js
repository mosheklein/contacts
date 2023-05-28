// student_index, student_details, student_create_get, student_create_post, student_delete

 const student_index = (req, res) => {
    student.findAll().then( students => res.render('students',{students}))
}



const student_details = (req, res) => {
    const studentID = req.params.id // 1
    student.findAll({
        where:{id:studentID}
    }).then( data => res.send(data))
}

module.exports = {
    student_index,
    student_details
}

