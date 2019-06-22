
const express = require('express');
const router = express.Router();
const AssignmentController = require('../controllers/Assignment.Controller');

router.post('/',(req,res)=>{
    AssignmentController.insertAssignment(req.body).then((data)=>{
        res.status(data.status).send(data.message);
    }).catch((err)=>{
        console.log(err);
        res.status(err.status).send(err.message);
    });
});

router.get('/',(req,res)=>{
    AssignmentController.getAssignment().then((data)=>{
        res.status(data.status).send(data.message);
    }).catch((err)=>{
        res.status(err.status).send(err.message);
    });
});

router.get('/:id',(req,res)=>{
    let id = req.params.id;
    AssignmentController.getAssignmentByID(id).then((data)=>{
        res.status(data.status).send(data.message);
    }).catch((err)=>{
        res.status(err.status).send(err.message);
    });
});

router.put('/:id',(req,res)=>{
    let id = req.params.id;
    AssignmentController.updateAssignment(id,req.body).then((data)=>{
        res.status(data.status).send(data.message);
    }).catch((err)=>{
        res.status(err.status).send(err.message);
    });
});

router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    AssignmentController.deleteAssignment(id).then((data)=>{
        res.status(data.status).send(data.message);
    }).catch((err)=>{
        res.status(err.status).send(err.message);
    });
});

module.exports = router;


/*//insert assignmnets
router.get('/',(req,res)=>{
    res.render("assignment/add&edit", {
        viewTitle : "Insert Assignments"
    });
});

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

//insert or update
router.post('/', (req, res) => {
    if (req.body._id === '')
        insertRecord(req, res);
    else
        updateRecord(req, res); // update function
});*/



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