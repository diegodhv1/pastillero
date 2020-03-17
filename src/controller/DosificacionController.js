import Dosificacion from '../models/dosificacion.model'
import Alarma from '../models/alarma.model'
import Auditoria from '../models/auditoria.model'
import Medicamento from '../models/medicamento.model'
import Paciente from '../models/paciente.model'

import { updateOneAlarm } from '../data/alarmaData.js';

const controller = {};

controller.emitEvents = () => {
  console.log('Evento enviado a sockets');
  require('../index').io.of('/api/dosificaciones').emit('get alarms');
}

function findFunction(query, res, limit) {
  Dosificacion.find(query)
  .populate({path:'medicamento', model: 'Medicamento'})
  .populate({path:'paciente', model: 'Paciente'})
  .populate({path:'alarma', model: 'Alarma'})
  .populate({path:'auditoria', model: 'Auditoria'})
  .exec((err, dosificaciones) => {    
    if(err){ return(err); }
    if(!limit) { 
      res.json(dosificaciones);
    } else { 
      res.json(dosificaciones[0]); 
    };
  });
};

controller.findAll = (req, res, next) => {
  findFunction({},res, false);
  next();
};

controller.findOne = (req, res, next) => {
  Dosificacion.findById(req.params.id, (err, dosificaciones) => {
    if(err){ return(err); }
    res.json(dosificaciones);
    next();
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
              findFunction(dosificacion, res, true);
              next();
        });
      })
        .catch(err => {res.json(err)});
      })
      .catch(err => {res.json(err)});
    })
    .catch(err => {res.json(err)});
  })
  .catch(err => {res.json(err)});
};

controller.update = (req, res, next) => {

  Dosificacion.findByIdAndUpdate(req.body._id, req.body, {}, (err) => {
    if (err) {
      return next(err);
    }
    res.json('Dosificacion actualizada');
    next();
  });
};

controller.delete = (req, res, next) => {
  
  Dosificacion.findByIdAndDelete(req.params.id, (err, dosificaciones) => {
    if (err) {
      return next(err);
    }
    Alarma.findByIdAndDelete(dosificaciones.alarma._id, (err, alarma) => {
      if (err) {
        return next(err);
      }
      res.json('Dosificacion eliminada');
      next();
    })
  });

};

export default controller;