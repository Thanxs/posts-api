import { model, Schema } from 'mongoose';

const postSchema: Schema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  picture: { type: String }
}, {
  timestamps: true
});

export default model('Post', postSchema);