const mongoose = require('mongoose')

// to run locally be sure to have an alias for `db` to localhost
const mongoUri = 'mongodb://db:27017/barnyard'
mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'DB connection error:'))
db.once('open', function() {
    console.log('DB connected')
})

const Farm = require('./farm')
const Tractor = require('./tractor')

module.exports = {
    Farm,
    Tractor
}
