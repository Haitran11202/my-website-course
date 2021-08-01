const express = require('express');
const router = express.Router();
const faceController = require('../app/controllers/FaceController');

router.get('/', faceController.index);

module.exports = router;