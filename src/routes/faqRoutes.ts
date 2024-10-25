import { Router } from 'express';
import { createFAQ, getFAQsByBusinessId, updateFAQ, deleteFAQ } from '../controllers/faqController';

const router = Router();

router.post('/', createFAQ); // Crear una nueva FAQ
router.get('/:businessId', getFAQsByBusinessId); // Obtener FAQs por ID de negocio
router.put('/:id', updateFAQ); // Actualizar FAQ por ID
router.delete('/:id', deleteFAQ); // Eliminar FAQ por ID

export default router;
