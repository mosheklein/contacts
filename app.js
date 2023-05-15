const express = require('express');
const app = express();
const port = 3000;

const db = require('./models');
const { user, contact } = require('./models');

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync().then((data)=> {
    app.listen(port, () => console.log(`listening at  http://localhost:${port}`));
})   

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index',{title:'Home'}))

app.get('/about', (req, res)=> res.render('about'))

app.get('/contacts', (req, res) => contact.findAll().then(data => res.render('contacts',{contacts:data})))

app.delete('/contacts/:id', (req, res) => {
    
    const id = req.params.id;
    contact.destroy( { where:{id:id} } )
})


app.get('/new-contact', (req, res)=> res.render('new-contact'))

app.post("/contacts", (req,res)=> {
    
    const newContact = req.body;
    contact.create(newContact).catch(err =>  (err) ? console.log(err) : '' );
    res.send(newContact);

})



app.get("/new-user", (req,res)=> res.render('new-user',{title:'Home'}))

app.post("/new-user", (req,res)=> {
    
    const newUser = req.body;
    user.create(newUser).catch(err =>  (err) ? console.log(err) : '' );
    res.send(newUser);

})

app.get('/users', (req, res)=> {
    user.findAll().then(data => res.send(data))
})

app.delete('/users', (req, res)=> {
    
    user.destroy({
        where:{},
        truncate:true
    })
    
    res.send('Deletion of all data');
})