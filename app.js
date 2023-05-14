const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./models')
const { user } = require('./models')

app.set('view engine', 'ejs')

app.use(express.static('public'));


db.sequelize.sync().then(d => {
    app.listen(port, () => console.log(`listening at  http://localhost:${port}`));
})


app.get('/', (req, res) => res.render('index', {title: 'Home',contacts }))
app.get('/about', (req, res) => res.render('about'))

app.get('/contacts', (req, res) => {
    user.findAll().then(contacts => res.render('contacts',{contacts}))
})

app.post('/contacts', (req, res) => {
    const newUser = req.body
    user.create(newUser).catch(err => console.log(err))
    res.redirect('/contacts')
})


app.get('/new-contact', (req, res) => res.render('new-contact'))
app.use((req, res) => res.status(404).render('404'))