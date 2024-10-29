import { Router } from 'express';
import { createFAQ, getFAQsByBusinessId, updateFAQ, deleteFAQ } from '../controllers/faqController';

const faqRouter = Router();

faqRouter.post('/', createFAQ); 
faqRouter.get('/:businessId', getFAQsByBusinessId);
faqRouter.put('/:id', updateFAQ);
faqRouter.delete('/:id', deleteFAQ);

export default faqRouter;
