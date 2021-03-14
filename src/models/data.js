const mongoose = require('mongoose')

const registerScheme = mongoose.Schema({ // Create new schema to use later on
    email:String,
    password:String,
    date:Date
})
module.exports = mongoose.model('Data',registerScheme) // Export the schema