import Router from 'express';
import PostController from '../controllers/PostController';

const router = Router();

router.get('/posts', PostController.getAllPosts);
router.get('/posts/:id', PostController.getPostById);
router.post('/posts', PostController.create);
router.put('/posts', PostController.updatePost);
router.delete('/posts/:id', PostController.deletePost);
router.get('/test', PostController.getTestPosts);

export default router;