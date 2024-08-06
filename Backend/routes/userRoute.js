const express = require("express");
const router = express.Router();

const { getUsers, signup, getUser, updateUser, deleteUser, signin } = require("../controllers/userController");
// const userController = require("../controllers/userController")

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);
router.post('/signup', signup);
router.post('/signin', signin);

router.get('/profile', (req, res) => res.send('Profile API works properly'));

module.exports = router;


