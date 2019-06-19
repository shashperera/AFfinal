const mongoose = require('mongoose');

var assignmentSchema = new mongoose.Schema({
    submission_status: {
        type:String
    },
    grading_status: {
        type:String
    },
    due_date: {
        type:Date
    },
    time_remaining: {
        type:String
    },
    last_modified: {
        type:String
    },
    file_submissions:{
        type:String
    }

});

mongoose.model("Assignments",assignmentSchema);