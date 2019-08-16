const mongoose = require('mongoose');

const citationSchema = new mongoose.Schema({
    citation:String
});

module.exports = mongoose.model('citation', citationSchema);