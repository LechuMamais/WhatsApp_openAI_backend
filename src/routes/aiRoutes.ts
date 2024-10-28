import { Router } from 'express';
import { getAIResponse } from '../controllers/aicontroller';

const router = Router();

router.post('/ask', getAIResponse);

export default router;
