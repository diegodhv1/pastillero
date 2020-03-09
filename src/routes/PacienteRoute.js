import express from 'express';
import {
  PacienteController as pacientes
} from '../controller/';

const router = express.Router();

router.get('/pacientes', pacientes.findAll);

export default router;
