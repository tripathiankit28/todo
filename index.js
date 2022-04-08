const express = require('express');
const bodyParser =require('body-parser');
const { mongoose } = require('./db.js');
const todoroutes=require('./routes/routes')
const login = require('./controllers/userRegistrationLogin')
var app=express();
app.use(bodyParser.json());

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
     next();
 });
 
app.listen(3000,()=>console.log('Express server started at port 3000'));

app.use('/',todoroutes);
app.use('/user',login)