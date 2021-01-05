const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const User = require('./models/user')

const app = express()

mongoose.connect('mongodb://localhost/passprt_Demo', 
{useNewUrlParser: true, useUnifiedTopology: true})

app.use(bodyParser.urlencoded({extended: true}))
app.use(require('express-session')({
    secret: "Blah blah blah",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.get('/', (req,res)=>{
    res.render('home.ejs')
})

app.get('/signup', (req,res)=>{
    res.render('signup.ejs')
})

app.post('/signup', (req,res)=>{
    var newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password, (err, user)=>{
        if(err){
            console.log(err)
            return res.render('signup.ejs')
        } else {
            passport.authenticate('local')(req, res, ()=>{
                res.redirect('/newsfeed')
            })
        }
    })
})

app.get('/login', (req,res)=>{
    res.render('login.ejs')
})

app.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/newsfeed',
        failureRedirect: '/login'
    }), (req,res)=>{
})

app.get('/logout', (req,res)=>{
    req.logout()
    res.redirect('/')
})

app.get('/newsfeed', isLoggedIn, (req,res)=>{
    res.render('newsfeed.ejs')
})

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}

app.listen(3000, ()=>{
    console.log('App is running on port 3000!')
})
