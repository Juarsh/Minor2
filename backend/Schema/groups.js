const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
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