var db = require('../models');
var Task = db.Task;
let taskController = {
    index: function (req, res) {
        Task.findAll().then(function (tasks) {
            res.render('allTask', {
                "tasks": tasks
            });
        });
    }
    , indexApi: function (req, res) {
        Task.findAll().then(function (tasks) {
            res.json(tasks);
        });
    },
    // craete a task on list
    todoList: function (req, res, next) {
        Task.findOrCreate({
            where: {
                id: req.body.id
            }
            //            ,defaults: {
            //                date: req.body.date
            //            }
            
            , defaults: {
                title: req.body.title
            }
        }).then((Task, created) => {
//            console.log(Task.get({
//                plain: true
//            }))
            console.log(created)
        }).then(function () {
            return res.redirect('/tasks');
        })
    },
    // edit a task
    editTask: function (req, res, next) {
        let id = req.query.id;
        Task.findById(id).then(Task => {
            res.render('editTask', {
                "task": Task
            });
        });
    },
    // update the revised task 
    editList: function (req, res, next) {
        Task.findById(req.body.id).then(Task => {
            Task.updateAttributes({
                title: req.body.title
            })
            return res.redirect('/tasks');
        });
    },
    // delete a task
    deleteTask: function(req, res) {
    let id = req.query.id;
    Task.findById(id).then(Task => {
        // console.log(Task);
        Task.destroy().then(() => {
          res.redirect('/tasks');
        })
      });
    },
};
module.exports = taskController;