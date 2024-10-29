import { Router } from 'express';
import { createBusiness, getAllBusinesses, getBusinessById, updateBusiness, deleteBusiness } from '../controllers/businessController';

const businessRouter = Router();

businessRouter.post('/', createBusiness);
businessRouter.get('/', getAllBusinesses);
businessRouter.get('/:id', getBusinessById);
businessRouter.put('/:id', updateBusiness);
businessRouter.delete('/:id', deleteBusiness);

export default businessRouter;
