const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    default: '',
    unique: true,
    required:true
  },
  password: {
    type: String,
    required: true,
    default: ''
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  signUpDate: {
    type: Date,
    default: () => new Date() //Date.now()
  }
});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);