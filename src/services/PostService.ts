import Post from '../models/post';
import FileService from './FileService';
import { posts as testedPosts } from '../db/mock';
import { IPost } from '../shared/post';

class PostService {
  async create(post: any, picture: any) {
    const fileName = FileService.saveFile(picture);
    return await Post.create({ ...post, picture: fileName });
  }

  async getAllPosts() {
    const posts = await Post.find();
    return posts;
  }

  async getPostById(id: string) {
    if (!id) {
      throw new Error('Id is not specified');
    }

    const post = await Post.findById(id);

    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  }

  async updatePost(post: any) {
    if (!post._id) {
      throw new Error('Id is not specified');
    }

    return await Post.findByIdAndUpdate(post._id, post, { new: true });
  }

  async deletePost(id: string) {
    if (!id) {
      throw new Error('Id is not specified');
    }

    return await Post.findByIdAndDelete(id);
  }

  async getTestPosts(): Promise<IPost[]> {
    const posts = await Post.find();
    if (posts && posts.length) {
      throw new Error('Some posts already exist!');
    }

    return testedPosts;
  }
}

export default new PostService();