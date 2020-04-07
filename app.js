const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const {Schema,model}= require('mongoose');
const app = express();
const homeRoute = require('./routes/home');
const addRoute = require('./routes/add');
const removeRoute = require('./routes/remove');
const updateRoute = require('./routes/update');
mongoose.Promise = global.Promise;
const url = 'mongodb://localhost:27017/loftschool';
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

const hbs = exphbs.create({
  defaultLayout:'main',
  extname:'hbs'
})

app.engine('hbs',hbs.engine);
app.set('view engine','hbs');
app.set('views','views');
app.use(express.urlencoded({extended:true}));
// app.use(express.static(__dirname + '/public'))
app.use('/', express.static(__dirname + '/public'));

app.use(homeRoute);
app.use(addRoute);
app.use(removeRoute);
app.use(updateRoute);

app.listen(3000,()=>{
    console.log('on port 3000')
});