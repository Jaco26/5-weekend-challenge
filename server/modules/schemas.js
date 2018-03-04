const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comments: {type: String},
}); // END commentSchema

const favoriteSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true },
    comments: [commentSchema]
}); // END favoriteSchema


module.exports = {
    commentSchema: commentSchema,
    favoriteSchema: favoriteSchema
}