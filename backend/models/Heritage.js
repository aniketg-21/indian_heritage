const mongoose = require('mongoose');
const { Schema } = mongoose;

const HeritageSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'id'
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    }, 
    view360: {
        type: String,
        required: true
    }, 
    tips: {
        type: String,
        required: true
    }, 
    image_link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('heritages', HeritageSchema);