const express = require('express');
const app = express();
const port = 3000;

const contacts = [
    {name:'Moshe', phone:'0527703292', email:'m@gmail.com'},
    {name:'Yaniv', phone:'0527703291', email:'y@gmail.com'},
    {name:'Tomer', phone:'0527703290', email:'t@gmail.com'} 
];
   

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.listen(port, () => console.log(`listening at  http://localhost:${port}`));


app.get('/', (req, res) => res.render('index',{title:'Home', contacts}))
app.get('/about', (req, res)=> res.render('about'))
app.get('/contacts', (req, res)=> res.render('contacts'))
app.get('/new-contact', (req, res)=> res.render('new-contact'))
app.use((req,res)=> res.status(404).render('404'))

