const express = require('express');
const router = express.Router();
const multer = require('multer');
const analyzeController = require('../controllers/analyzeController');

const upload = multer(); // 메모리에 저장

router.post('/', upload.any(), analyzeController.analyze);

module.exports = router;
