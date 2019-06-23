//CRUD operations related to the assignment

const express = require('express');
var router = express.Router();
var app = express();
const mongoose= require('mongoose');
const Assignment = mongoose.model('Assignment');

const pdfMake = require('../pdfmake/pdfmake');
const vfsFonts = require('../pdfmake/vfs_fonts');


pdfMake.vfs = vfsFonts.pdfMake.vfs;

router.get('/',(req,res)=>{
    res.render("assignment/add&edit", {
        viewTitle : "Insert Assignments"
    });
});

router.post('/', (req, res) => {
    if (req.body._id === '')
        insertRecord(req, res);
    else
        updateRecord(req, res); // update function
});


// function to add a new record
function insertRecord(req,res){
    var assignment = new Assignment();
    assignment.module = req.body.module;
    assignment.title = req.body.title;
    assignment.due_date = req.body.due_date;
    assignment.file_submissions = req.body.file_submissions;
    assignment.save((err,doc) =>{

        if(!err) {
            res.redirect('assignment/list');
        }
        else {
            if (err.name === 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("assignment/add&edit", {
                    viewTitle: "Insert Assignments",
                    assignment: req.body
                });
            } else
                console.log('Error during code insertion : ' + err);
        }

    });

}



//update function
function updateRecord(req, res) {
    Assignment.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('assignment/list'); }
        else {
            if (err.name === 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("assignment/add&edit", {
                    viewTitle: 'Update Assignment',
                    assignment: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


//get the list

router.get('/list', (req, res) => {
    Assignment.find((err, docs) => {
        if (!err) {
            res.render("assignment/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving assignments :' + err);
        }
    });
});





function handleValidationError(err,body){
    for(field in err.errors){
        switch (err.errors[field].path) {
            case 'module':
                body['moduleError'] = err.errors[field].message;
                break;
            case 'title':
                body['titleError'] = err.errors[field].message;
                break;
            case 'due_date':
                body['due_dateError'] = err.errors[field].message;
                break;
            case 'file_submissions':
                body['file_submissionError'] = err.errors[field].message;
                break;

        }
    }
}

//get assignment by specific id
router.get('/:id', (req, res) => {
    Assignment.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("assignment/add&edit", {
                viewTitle: "Update Assignments",
                assignment: doc
            });
        }
    });
});

//remove assignment
router.get('/delete/:id', (req, res) => {
    Assignment.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/assignment/list');
        }
        else { console.log('Error in assignment delete :' + err); }
    });
});



module.exports = router;
