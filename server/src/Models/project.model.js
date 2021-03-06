const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
  projectTitle: {
    type: String,
    require: true,
  },
  projectDescription: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

});

module.exports = model('Project', ProjectSchema);
