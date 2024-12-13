const express = require('express');
const feedController = require('../controllers/ritual');
const router = express.Router();


router.get('/posts', feedController.getRitual);
router.post('/post', feedController.createRitual);
module.exports = router;