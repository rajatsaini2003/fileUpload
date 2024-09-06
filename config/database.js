const mongoose=require('mongoose');

require('dotenv').config();

exports.connect= () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("connected to database"))
    .catch( (error) => {
        console.log("error connecting to database");
        console.error(error);
        process.exit(1);
    })
}