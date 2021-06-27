const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []


// Make sure you place body-parser before your CRUD handlers!
app.use( express.static( "public" ) );
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))


app.get('/menus', checkAuthenticated, (req, res) => {
    res.render('menus.ejs')
  })
  
  app.get('/', checkNotAuthenticated, (req, res) => {
    res.render('index.ejs')
  })
  
  app.post('/', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/menus',
    failureRedirect: '/',
    failureFlash: true
  }))
  
  app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
  })
  
  app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        birthdate: req.body.birthdate,
        gender: req.body.gender
      })
      res.redirect('/')
    } catch {
      res.redirect('/register')
    }
  })
  
  app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/')
  })
  
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/menus')
    }
    next()
  }

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
