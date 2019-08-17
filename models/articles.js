const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    id:Number,
    pdfUrl:String,
    note:String,
    tags:[String]
});

module.exports = mongoose.model('article', articleSchema);