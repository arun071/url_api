const mongoose = require('mongoose');
const db = require('../config/db');
const userModel = require('./user.model')
const { Schema } = mongoose;
const urlSubmitSchema = new Schema({
    userId: {
        type:Schema.Types.ObjectId,
        ref: userModel.modelName
    },
    longurl: {
        type: String
    }, shorturl: {
        type: String
    },
})
const urlSubmitModel = db.model('urlSubmittion', urlSubmitSchema);
module.exports = urlSubmitModel;