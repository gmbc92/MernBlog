import express from 'express';

import { getPosts, createPost} from '../controllers/posts.js'

const router = express.Router();

// importamos as rotas posts de outro arquivo para ficar clean
router.get('/', getPosts);
router.post('/', createPost);

export default router;
