const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String
    }
}) 
//post middleware
fileSchema.post("save",async function(doc){
    try {
        //console.log("doc",doc);

        //transporter
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        });
        //snd mail
        let info = await transporter.sendMail({
            from:'lorditachisama20@gmail.com',
            to:doc.email,
            subject:'New File Uploaded on cloudinary',
            html:`<h2>Hello</h2> <p> File Uploaded, View Here <a href=${doc.imageUrl}>${doc.imageUrl}</a> </p>`
        })
        //console.log("Message sent: %s", info);
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"something went wrong sending email",
            "error":error.message,
        })
    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;