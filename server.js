var express = require('express');
var app = express();
var bcrypt = require('bcrypt');
var passport = require('passport');

var initializePassport = require('./passport-config');
initializePassport(passport);

var users = []
app.set('view-engine','ejs');
app.use(express.urlencoded({extended: false}));

app.get('/',(req,res)=> {
    res.render('index.ejs',{name : 'Rishi'})
});

app.get('/login',(req,res)=> {
    res.render('login.ejs'),{}
});

app.post('/login', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login',
    successFlash: true
}))
app.get('/register',(req,res)=> {
    res.render('register.ejs'),{}
});

app.post('/register',(req,res)=>{
    try{

        const hashedPassword = bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(), 
            name: req.body.name, 
            email: req.body.email, 
            password: hashedPassword

        })
        res.redirect('/login')
    }catch {

        res.redirect('/register')
    }
    console.log(users) 

})

app.listen(3000);