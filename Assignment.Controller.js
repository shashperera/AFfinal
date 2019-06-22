const Assignment = require('../models/Assignment');


var AssignmentController = function(){
    this.insertAssignment = ()=>{
        return new Promise((resolve,reject)=>{
            Course.save().then((data)=>{
                resolve({status:200,message:'New Assignment added successfully'+ data});
            }).catch((err)=>{
                reject({status:500,message:'Error: '+err});
            });
        })
    };

    this.getAssignment = ()=>{
        return new Promise((resolve,reject)=>{
            Assignment.find().then((data)=>{
                resolve({status:200,message:data});
            }).catch((err)=>{
                reject({status:500,message:'Assignment not found. Error: '+err});
            })
        });
    };

    this.getAssignmentByID = (id)=>{
        return new Promise((resolve,reject)=>{
            Assignment.findById(id).then((data)=>{
                resolve({status:200,message:data});
            }).catch((err)=>{
                reject({status:500,message:'Assignment not found. Error: '+err});
            })
        });
    };

    this.updateAssignment = (id,data)=>{
        return new Promise((resolve,reject)=>{

            let assignment = {

                module:data.module,
                title:data.title,
                due_date:data.due_date,
                file_submissions:data.file_submissions
            };
            Assignment.findByIdAndUpdate({_id: id},course).then(()=>{
                resolve({status:200,message:'Assignment updated successfully'});
            }).catch((err)=>{
                reject({status:500,message:'Assignment updating failed. Error: '+err});
            });
        })
    };

    this.delete = (id)=>{
        return new Promise((resolve,reject)=>{
            Assignment.findByIdAndDelete(id).then(()=>{
                resolve({status:200,message:'Assignment deleted successfully'});
            }).catch((err)=>{
                reject({status:500,message:'Data not found. Error: '+err});
            })
        });
    }
};

module.exports = new AssignmentController();


//CRUD operations related to the assignment
/*
const Assignment = mongoose.model('Assignment');



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
        if (!err) { res.redirect('assignment/list2'); }
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
}**/