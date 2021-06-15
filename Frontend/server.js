const express = require('express')
const app = express();

// Make sure you place body-parser before your CRUD handlers!
app.use( express.static( "public" ) );
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

//Halaman Awal(login)
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/', (req, res) => {
    res.render('menus.ejs')
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

//Diary
app.get('/diary', (req, res) =>{
    res.render('diary.ejs')
})

//Article
app.get('/article', (req, res) =>{
    res.render('article.ejs')
})

//Report
app.get('/report', (req, res) =>{
    res.render('report.ejs')
})

//Restaurant
app.get('/restaurants', (req, res) =>{
    res.render('restaurants.ejs')
})

//red corner
app.get('/red_corner', (req, res) =>{
    res.render('red_corner.ejs')
})

//yellow corner
app.get('/yellow_corner', (req, res) =>{
    res.render('yellow_corner.ejs')
})

//blue corner
app.get('/blue_corner', (req, res) =>{
    res.render('blue_corner.ejs')
})

//green corner
app.get('/green_corner', (req, res) =>{
    res.render('green_corner.ejs')
})

//Start Server
app.listen(3000, function(){    
    console.log('server start at 3000')
})
