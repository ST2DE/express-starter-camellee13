var db = require('../models');
var Task = db.Task;
let taskController = {
    index: function (req, res) {
        Task.findAll().then(function (tasks) {
            res.render('index', {
                "tasks": tasks
            });
        });
    }
    , indexApi: function (req, res) {
        Task.findAll().then(function (tasks) {
            res.json(tasks);
        });
    }
    , 
    // to do list task
    todolist: function (req, res, next) {
        Task.findOrCreate({
            where: {
                id: req.body.id
            }
            , defaults: {
                title: req.body.title
            }
        }).spread((Task, created) => {
            console.log(Task.get({
                plain: true
            }))
            console.log(created)
        }).then(function () {
            return res.redirect('/tasks');
        })
    }
};
module.exports = taskController;