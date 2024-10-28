import { Router } from 'express';
import  { createBusiness, getAllBusinesses, getBusinessById, updateBusiness, deleteBusiness } from '../controllers/businessController';

const router = Router();

router.post('/', createBusiness);
router.get('/', getAllBusinesses);
router.get('/:id', getBusinessById);
router.put('/:id', updateBusiness);
router.delete('/:id', deleteBusiness);

export default router;
