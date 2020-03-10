import express from 'express';
import {
  AuditoriaController as auditorias
} from '../controller/';

const router = express.Router();

router.get('/auditorias', auditorias.findAll);

export default router;
