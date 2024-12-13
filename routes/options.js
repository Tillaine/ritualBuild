const express = require('express');
const optionsController = require('../controllers/options');
const router = express.Router();


router.get('/options', optionsController.getRitualOptions);
router.get('/purpose', optionsController.getPurpose);
router.post('/purpose', optionsController.createPurpose);

module.exports = router;