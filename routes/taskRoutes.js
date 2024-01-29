const express = require('express')
const router = express.Router();
const { getAllTask, getTask, createTask, deleteTask, deleteAllTask, updateTask, updateTaskCompletion, getAllTaskCompleted } = require('../controllers/taskController')
router.get('/getalltask', getAllTask)
router.get('/completed/:val', getAllTaskCompleted)
router.get('/gettask/:id', getTask)
router.post('/createtask', createTask)
router.put('/updatetask', updateTask)
router.put('/updatetaskcompletion', updateTaskCompletion)
router.delete('/deletetask/:id', deleteTask)
router.delete('/deletealltask', deleteAllTask)
module.exports = router