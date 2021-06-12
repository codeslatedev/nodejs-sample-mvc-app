const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

//fetch all the users from database
router.get('/fetch-all', controller.getAllUsers);

//I have used get method as I am adding user from static data defined in the controller.
router.get('/add', controller.addUser)


module.exports = router