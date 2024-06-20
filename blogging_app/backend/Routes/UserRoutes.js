const express = require('express');
const { registerUser, loginUser, getUserFollowers } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id/followers', getUserFollowers);

module.exports = router;
