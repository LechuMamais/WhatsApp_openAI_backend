import { Router } from 'express';
import { getAIResponse } from '../controllers/aiController';

const aiRouter = Router();

aiRouter.post('/ask', getAIResponse);

export default aiRouter;
