import express from 'express';
import {
  MedicamentoController as medicamentos
} from '../controller/';

const router = express.Router();

router.get('/medicamentos', medicamentos.findAll);

export default router;
