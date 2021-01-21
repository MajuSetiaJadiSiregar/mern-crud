import express from 'express';
const router = express.Router();
import { readBlog, createBlog } from '../controllers/blogController.js';

router.get(`/`, readBlog);
router.post(`/`, createBlog);

export default router;
