const mongoose = require('mongoose');


async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:JiGbemyuASipeAMX@yt-complete-backend.kzsrvyu.mongodb.net/halley")
    console.log("Connected to DB");
}

module.exports = connectDB;