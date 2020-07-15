const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: { type: String, required: false },
  publishedDate: { type: Date, default: Date.now },
  postImage: { type: String, required: false },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Post', postSchema);
