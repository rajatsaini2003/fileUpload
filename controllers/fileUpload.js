const File= require('../models/File');
const cloudinary= require('cloudinary').v2;
exports.localFileUpload = async (req,res) =>{
    try {

        const file = req.files.file;
        console.log("File : ",file);

        let path = __dirname +'/files/' + Date.now() + `.${file.name.split('.')[file.name.split('.').length-1]}` ;
        console.log("path : ",path)
        file.mv(path,(err)=>{
            console.log(err);
        });
        res.json({
            success:true,
            message:"Local File Upload Successfully",
        })
    } catch(err){
        console.log(err);
    }
} 

function checkFileType(fileType ,supportedTypes){
    if(supportedTypes.includes(fileType)){
        return true;
    }
    return false;
}
async function uploadToCloudinary(file,folder){
    const options={folder}
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}


exports.imageUpload= async (req, res)=>{
    try {
        const {name, tags, email} = req.body;
        console.log(name,tags,email);
        const file = req.files.imageFile;
        console.log(file);

        const supportedTypes = ["jpg", "jpeg","png"];
        const fileType = file.name.split('.')[file.name.split('.').length-1].toLowerCase();
        console.log(fileType);
        if(!checkFileType(fileType, supportedTypes)){
            return res.this.status(400).json({
                success: false,
                message: "Unsupported file type"
            })
        }
        console.log("uploading");
        const response = await uploadToCloudinary(file,"Dummy");
        console.log("uploaded");
        const fileData= await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"File Successflly uploaded successfully",

        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"something went wrong upoading the image",
            "error":error.message,
        })
    }
}