import { Router } from 'express';
import { getAIResponse } from '../controllers/aicontroller';

const aiRouter = Router();

aiRouter.post('/ask', getAIResponse);

export default aiRouter;
