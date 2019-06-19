
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AssignmentDB', {useNewUrlParser:true}, (err) => {
    if(!err){
        console.log("Mongo DB connection succeeded")
    }
    else {
        console.log("Error in the connection : " + err);

    }});

require('./assignment.model')