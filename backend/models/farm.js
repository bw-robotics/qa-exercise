const mongoose = require('mongoose')
const Schema = mongoose.Schema


const FarmSchema = new Schema({
    name: {
        type: String,
    },
    size: { // acres
        type: Number,
        required: [true, 'Size field is required']
    },
    geo: {
        lat: { type: Number },
        lon: { type: Number } 
    },
    tractors: [String],
    updated: { 
        type: Date,
    }
})

const Farm = mongoose.model('farm', FarmSchema)

module.exports = Farm
