require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const port = 3000;
const assignmentController = require('./controllers/assignmentController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));


//config view directory
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs', exphbs({extname: 'hbs',defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine','hbs');

//set the public folder
app.use(express.static(path.join(__dirname, 'views')));


app.use('/assignment',assignmentController); //configure routing for node js app



app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}/assignment`);
});
