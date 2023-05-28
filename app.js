const express = require('express')
const app = express()
const port = 7000

const db = require('./models');

const studentRouter = require('./routes/studentRoute.js')


// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('students',studentRouter)

db.sequelize.sync().then((data)=> {
    app.listen(port, () => console.log(`listening at  http://localhost:${port}`));
})   

app.set('view engine', 'ejs')

