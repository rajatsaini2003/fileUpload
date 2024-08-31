const mongoose=require('mongoose');

require('dotenv').config();

exports.connect= () => {
    mongoose.connect(process.env.DB_URL)
    .then(() => console.log("connected to database"))
    .catch( (arror) => {
        console.log("error connecting to database");
        console.error(error);
        process.exit(1);
    })
}