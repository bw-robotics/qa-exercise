const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TractorSchema = new Schema({
    name: {
        type: String,
    },
    model: {
        type: String,
        required: [true, 'Model field is required']
    },
    created: {
        type: Date
    },
    engine: { // horses
        type: Number
    }
})

const Tractor = mongoose.model('tractor', TractorSchema)

module.exports = Tractor
