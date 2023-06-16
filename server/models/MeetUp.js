const { Schema, model } = require('mongoose'); 
var moment = require('moment');
const dateFormat = require('../utils/dateFormat');


const meetUpSchema = new Schema({
  meetUpText: {
    type: String,
    required: 'You need to leave a meetUp!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  meetUpAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const MeetUp = model('meetUp', meetUpSchema);

module.exports = MeetUp;
