import Post from '../models/post.js';
import PostService from '../services/PostService.js';

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files && req.files.picture);
      await post.save()
  
      res.status(200).send(post)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await PostService.getAllPosts();
      return res.status(200).send(posts);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getPostById(req, res) {
    try {
      const post = await PostService.getPostById(req.params.id);
      return res.status(200).send(post)
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updatePost(req, res) {
    try {
      const updatedPost = await PostService.updatePost(req.body);
      return res.status(200).send(updatedPost);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async deletePost(req, res) {
    try {
      const deletedPost = await PostService.deletePost(req.params.id);
      return res.status(200).send(deletedPost);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getTestPosts(req, res) {
    try {
      const posts = await PostService.getTestPosts();

      posts && Post.insertMany(posts).then((data) => res.status(200).send(data));
    } catch (error) {
      res.status(403).send(error);
    }
  }
}

export default new PostController();