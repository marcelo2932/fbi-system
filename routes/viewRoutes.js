import express from 'express';
import { getIndex, getPrivada } from '../controllers/viewController.js';

const router = express.Router();

router.get('/', getIndex);
router.get('/privada', getPrivada);

export default router;