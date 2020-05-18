var express = require('express');
var app = express();

app.set('view-engine','ejs')

app.get('/',(req,res)=> {
    res.render('index.ejs',{name : 'Rishi'})
});

app.get('/',(req,res)=> {
    res.render('login.ejs'),{}
});

app.get('/',(req,res)=> {
    res.render('register.ejs'),{}
});

app.post('/register',(req,res)=>{

})

app.listen(3000);