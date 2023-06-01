const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: { type: String },
    content: { type: String },
    delete: { type: Boolean, default: false }
});

module.exports = mongoose.model("user", schema);