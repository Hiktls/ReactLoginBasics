const mongoose = require('mongoose')

const registerScheme = mongoose.Schema({
    email:String,
    password:String,
    date:Date
})
module.exports = mongoose.model('Data',registerScheme)