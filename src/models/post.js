import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  picture: { type: String }
}, {
  timestamps: true
});

export default mongoose.model('Post', postSchema);