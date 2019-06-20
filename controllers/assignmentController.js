//CRUD operations related to the assignments

const express = require('express');
var router = express.Router();
const mongoose= require('mongoose');
const Assignment = mongoose.model('Assignment');

router.get('/',(req,res)=>{
    res.render("assignments/add&edit", {
        viewTitle : "Insert Assignments"
    });
});

router.post('/',(req,res)=>{
insertRecord(req,res)
});

function insertRecord(req,res){

}

module.exports = router;
