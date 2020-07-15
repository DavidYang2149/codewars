const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const PostsController = require('../controllers/posts');

const uploadModule = require('../middleware/upload');

router.get('/', PostsController.posts_get_all);

router.post(
  '/',
  checkAuth,
  uploadModule.checkUploadPath,
  uploadModule.upload.single('postImage'),
  PostsController.posts_create_post,
);

router.get('/:postId', PostsController.posts_get_post);

router.patch('/:postId', checkAuth, PostsController.posts_update_post);

router.delete('/:postId', checkAuth, PostsController.posts_delete_post);

module.exports = router;
