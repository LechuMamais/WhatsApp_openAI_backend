import { Router } from 'express';
import { handleIncomingMessage } from '../controllers/whatsappController';

const twilioRouter = Router();

twilioRouter.post('/webhook/whatsapp', handleIncomingMessage);

export default twilioRouter;
