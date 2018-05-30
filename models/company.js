//Require Mongoose
const mongoose = require('mongoose')

//Define a schema
const Schema = mongoose.Schema

const Company = new Schema({
    name: String,
    description: String,
    registrationDate: Date
});