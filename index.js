//app create
const express=require('express');
const app=express();

//port find out
require('dotenv').config();
const port=process.env.PORT ||4001;

//middleware add
app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload());

//db connect
const db= require("./config/database");
db.connect();

//cloud connect
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

//api route mounting
const upload = require('./routes/FileUpload');
app.use('/api/v1/upload',upload);

// activate server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})
