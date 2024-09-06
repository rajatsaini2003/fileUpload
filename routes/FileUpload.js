const express=require('express');
const router=express.Router();

const {imageUpload, videoUpload, imageReducer, localFileUpload} = require('../controllers/fileUpload');

router.post('/localFileUpload',localFileUpload);

module.exports = router;