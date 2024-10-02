const express=require('express');
const router=express.Router();

const {imageUpload, videoUpload, imageReducer, localFileUpload} = require('../controllers/fileUpload');

router.post('/localFileUpload',localFileUpload);
router.post('/imageUpload',imageUpload);
router.post('/videoUpload',videoUpload);
router.post('/imageReducer',imageReducer);

module.exports = router;