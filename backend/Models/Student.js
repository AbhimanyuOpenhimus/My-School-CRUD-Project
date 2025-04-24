const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  studentname: {
    type: String
  },
  fathername:{
    type: String
  },
  email: {
    type: String
  },
  schoolname:{
    type: String
  },
  rollno: {
    type: Number
  }
}, {
    collection: 'students'
  })

module.exports = mongoose.model('Student', studentSchema)