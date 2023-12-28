const mongoose = require('mongoose');
const db = require('../config/db');
const { Schema } = mongoose;
const userScema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }, password: {
        type: String
    },
})
const userModel=db.model('user',userScema);
module.exports=userModel;