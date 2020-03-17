import express from 'express';
import {
  DosificacionController as dosificaciones
} from '../controller/';

const router = express.Router();

router.get('/dosificaciones', dosificaciones.findAll, dosificaciones.emitEvents);
router.post('/dosificaciones/add', dosificaciones.add, dosificaciones.emitEvents);
router.get('/dosificaciones/:id', dosificaciones.findOne, dosificaciones.emitEvents);
router.put('/dosificaciones/:id', dosificaciones.update, dosificaciones.emitEvents);
router.delete('/dosificaciones/:id', dosificaciones.delete, dosificaciones.emitEvents);

export default router;
