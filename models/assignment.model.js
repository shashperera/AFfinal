const mongoose = require('mongoose');

var assignmentSchema = new mongoose.Schema({
    module: {
        type:String,
        required : 'This field is required'
    },
    //assignment title
    title: {
        type:String,
        required : 'This field is required'
    },
    due_date: {
        type: String,
        required : 'Date invalid'
    },
   /* due_time: {
        type: Date.now(),
        required : 'Date invalid'
    },*/
    file_submissions: {
        type:String
        //data:Buffer,
        //contentType: String
    }


});



// Custom validation for Module
assignmentSchema.path('module').validate((val) => {
    moduleRegex = /^(([(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return moduleRegex.test(val);
}, 'Invalid module name.');


mongoose.model("Assignment",assignmentSchema);