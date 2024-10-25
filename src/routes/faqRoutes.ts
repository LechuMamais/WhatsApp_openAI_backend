import { Router } from 'express';
import { getFaqs, createFaq } from '../controllers/faqController';

const router = Router();

router.get('/:businessId', getFaqs);
router.post('/', createFaq);

export default router;
