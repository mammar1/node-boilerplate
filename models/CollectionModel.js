const mongoose = require('mongoose')

const CollectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Collection name is required"],
        index: true
    },
    groupId: {
        type: String,
        required: [true,  "Group id is required"],
        index: true
    }
});

module.exports = CollectionSchema;