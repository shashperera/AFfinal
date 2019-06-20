require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const assignemntController = require('./controllers/assignmentController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));


//config view directory
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs', exphbs({extname: 'hbs',defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine','hbs');

app.listen(3000, () => {
    console.log('Express server started at port 3000');
});

app.use('/assignment',assignemntController); //configure routing for node js app
