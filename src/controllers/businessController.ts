import { RequestHandler } from 'express';
import Business from '../models/businessModel';

// Crear un nuevo negocio
export const createBusiness: RequestHandler = async (req, res) => {
  try {
    const newBusiness = await Business.create(req.body);
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el negocio', error });
  }
};

// Obtener todos los negocios
export const getAllBusinesses: RequestHandler = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los negocios', error });
  }
};

// Obtener negocio por ID
export const getBusinessById: RequestHandler = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {res.status(404).json({ message: 'Negocio no encontrado' })};
    res.status(200).json(business);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el negocio', error });
  }
};

// Actualizar negocio por ID
export const updateBusiness: RequestHandler = async (req, res) => {
  try {
    const updatedBusiness = await Business.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBusiness) {res.status(404).json({ message: 'Negocio no encontrado' })};
    res.status(200).json(updatedBusiness);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el negocio', error });
  }
};

// Eliminar negocio por ID
export const deleteBusiness: RequestHandler = async (req, res) => {
  try {
    const deletedBusiness = await Business.findByIdAndDelete(req.params.id);
    if (!deletedBusiness) {res.status(404).json({ message: 'Negocio no encontrado' })};
    res.status(200).json({ message: 'Negocio eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el negocio', error });
  }
};
