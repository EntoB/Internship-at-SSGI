const express = require("express");
const router = express.Router();

const { addtask, getTasks } = require("../controllers/taskController");
const { auth, adminMiddleware } = require("../Middleware/authMiddlware");

router.post('/addtask', auth, adminMiddleware, addtask);
// router.post('/addtask', addtask); //authentiction removed
router.get('/tasks', getTasks);


module.exports = router;