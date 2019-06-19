require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const assignemntController = require('./controllers/assignmentController');

var app = express();

//conig view directory
app.set('views',path.join(_dirname,'views'));
app.engine();

app.listen(3000, () => {
    console.log('Express server started at port 3000');
});

app.use('/assignment',assignemntController); //configure routing for node js app