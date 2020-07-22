const mongoose = require('mongoose');
// schema maps to a collection
const Schema = mongoose.Schema;

const postSchema = new Schema({

    title:String,
    body:String,
    image:String,
    category:String,
    user:String,
    date:{
        type:Date,
        default:Date.now()
    }

});

module.exports = mongoose.model('post', postSchema);