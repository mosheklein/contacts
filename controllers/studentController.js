// student_index, student_details, student_create_get, student_create_post, student_delete
// student_update
 const student_index = (req, res) => {
    student.findAll().then( students => res.render('students',{students}))
}



const student_details = (req, res) => {
    const studentID = req.params.id // 1
    student.findAll({
        where:{id:studentID}
    }).then( data => res.send(data))
}


const student_create_get =  (req, res) => {
    res.render('new-student')
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

const student_update =  (req, res) => {
    const studentID = req.params.id // 1
    student.update({email:'s@gmail.com'},{where:{id:studentID}}).then( data => res.send(data))
}

module.exports = {
    student_index,
    student_details,
    student_create_get,
    student_create_post,
    student_delete,
    student_update
}

