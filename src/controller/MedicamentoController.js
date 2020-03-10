import Medicamento from '../models/medicamento.model'

const controller = {};

controller.findAll = (req, res) => {
  Medicamento.find()
    .then(medicamentos => {
      res.send(medicamentos);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al intentar obtener medicamentos"
      });
    });
};

export default controller;