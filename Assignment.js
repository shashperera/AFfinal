const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
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
        type:String,
        required : 'Assignment not uploaded'
    }


});

module.exports = mongoose.model("Assignment",assignmentSchema);