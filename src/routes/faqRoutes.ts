import { Router } from 'express';
import { createFAQ, getFAQsByBusinessId, updateFAQ, deleteFAQ } from '../controllers/faqController';

const router = Router();

router.post('/', createFAQ); 
router.get('/:businessId', getFAQsByBusinessId);
router.put('/:id', updateFAQ);
router.delete('/:id', deleteFAQ);

export default router;
