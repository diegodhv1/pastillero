import express from 'express';
import {
  AlarmaController as alarmas
} from '../controller/';

const router = express.Router();

router.get('/alarmas', alarmas.findAll);

export default router;
