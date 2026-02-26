const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({

    title : String,
    description : String,


})

const noteModel = mongoose.model("note", noteSchema)

/*

CRUD Operations

Create - POST
Read - GET
Update - PUT/PATCH
Delete - DELETE

*/

module.exports = noteModel;
