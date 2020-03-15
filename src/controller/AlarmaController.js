import Alarma from '../models/alarma.model'
import { updateAlarmaData } from '../data/alarmaData.js';

const controller = {};

controller.findAll = (req, res) => {
  Alarma.find()
    .then(alarmas => {
      res.send(alarmas);
      updateAlarmaData(alarmas);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al intentar obtener alarmas"
      });
    });
};

export default controller;