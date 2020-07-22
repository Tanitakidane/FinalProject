const mongoose = require('mongoose');
// schema maps to a collection
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  email:String,
 
  password: {
    type: 'String',
    required: true,
    trim: true
  },
 
});

module.exports = mongoose.model('user', userSchema);