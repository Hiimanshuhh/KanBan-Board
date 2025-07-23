const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Summary: { type: String, required: true },
  Status: { type: String, required: true },
  Type: String,
  Priority: String,
  Assignee: String,
  Deadline: String,
  Comments: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Task', TaskSchema);