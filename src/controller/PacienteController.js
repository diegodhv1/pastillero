import Paciente from '../models/paciente.model'

const controller = {};

controller.findAll = (req, res) => {
  Paciente.find()
    .then(pacientes => {
      res.send(pacientes);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Ah ocurrido un error al intentar obtener pacientes."
      });
    });
};

export default controller;