const File= require('../models/File');

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