import Dosificacion from '../models/dosificacion.model'
import Alarma from '../models/alarma.model'
import Auditoria from '../models/auditoria.model'
import Medicamento from '../models/medicamento.model'
import Paciente from '../models/paciente.model'

import { updateOneAlarm } from '../data/alarmaData.js';

const controller = {};

controller.findAll = (req, res) => {
  Dosificacion.find()
    .then(dosificaciones => {
      res.send(dosificaciones);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al intentar obtener dosificaciones"
      });
    });
};

controller.add = (req, res, next) => {
  let dosificacion = new Dosificacion({
    dosis: req.body.dosis
  });
  
  Medicamento.findOneAndUpdate(req.body.medicamento,req.body.medicamento, {new: true, upsert: true})
  .then(med => {
    dosificacion.medicamento = med;
    Paciente.findOneAndUpdate(req.body.paciente,req.body.paciente, {new: true, upsert: true})
    .then(pac => {
      dosificacion.paciente = pac;
      Alarma.findOneAndUpdate(req.body.alarma,req.body.alarma, {new: true, upsert: true})
      .then(ala => {
        dosificacion.alarma = ala;
        updateOneAlarm(ala);
        Auditoria.findOneAndUpdate(req.body.auditoria,req.body.auditoria, {new: true, upsert: true})
        .then(aud => {dosificacion.auditoria = aud})
        .then(() => {
          dosificacion.save(function (err) {
            if (err) {
                return next(err);
            }
              res.send(dosificacion);
        });
      })
        .catch(err => {dosificacion.auditoria = err});
      })
      .catch(err => {dosificacion.alarma = err});
    })
    .catch(err => {dosificacion.paciente = err});
  })
  .catch(err => {dosificacion.medicamento = err});
};

export default controller;