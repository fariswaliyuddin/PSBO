const express = require('express')
const app = express();

// Make sure you place body-parser before your CRUD handlers!
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

//Halaman Awal(login)
app.get('/', (req, res) => {
    res.render('index.ejs')
})


//Register
app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', (req, res) => {
    res.render('index.ejs')
})

//Menus
app.get('/menus', (req, res) => {
    res.render('menus.ejs')
})

app.post('/', (req, res) => {
    res.render('menus.ejs')
})

//Restaurant
app.get('/restaurants', (req, res) =>{
    res.render('restaurants.ejs')
})


//Start Server
app.listen(3000, function(){    
    console.log('server start at 3000')
})
