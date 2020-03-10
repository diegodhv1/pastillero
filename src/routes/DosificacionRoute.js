import express from 'express';
import {
  DosificacionController as dosificaciones
} from '../controller/';

const router = express.Router();

router.get('/dosificaciones', dosificaciones.findAll);
router.post('/dosificaciones/add', dosificaciones.add);

export default router;
