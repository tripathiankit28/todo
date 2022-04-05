const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');
const { mongoose } = require('./db.js');
const todoroutes = require('../backend/routes/routes')
var app=express();
app.use(bodyParser.json());


app.use(cors({origin:'http://localhost:4200'}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
     res.setHeader('Access-Control-Allow-Credentials', true);
     next();
 });



app.listen(3000,()=>console.log('Express server started at port 3000'));

app.use('/todolist',todoroutes);