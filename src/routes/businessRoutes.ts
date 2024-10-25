import { Router } from 'express';
import  { createBusiness, getAllBusinesses, getBusinessById, updateBusiness, deleteBusiness } from '../controllers/businessController';

const router = Router();

// Rutas CRUD para Business
router.post('/', createBusiness); // Crear un nuevo negocio
router.get('/', getAllBusinesses); // Obtener todos los negocios
router.get('/:id', getBusinessById); // Obtener negocio por ID
router.put('/:id', updateBusiness); // Actualizar negocio por ID
router.delete('/:id', deleteBusiness); // Eliminar negocio por ID

export default router;
