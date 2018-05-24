const taskController = require('../controllers/taskController.js');

module.exports = function (app) {
    //  craete a task on list
    app.get('/tasks', taskController.index);
    app.get('/api/tasks', taskController.indexApi);
    app.post('/tasks', taskController.todoList);
    // edit a task
    app.get('/tasks/edit', taskController.editTask);
    app.post('/edit', taskController.editList);
    // delete a task
    app.get('/tasks/delete', taskController.deleteTask);
};