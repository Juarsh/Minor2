const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    desc: {
        type: String,
        trim: true
    },
    adminEmail: {
        type: String,
        trim: true,
        index: { unique: true, sparse: true }
    },
    memberEmails: {
        type: [String],
    },
}, { timestamps: true });


module.exports = groupSchema;