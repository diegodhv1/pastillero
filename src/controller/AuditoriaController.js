import Auditoria from '../models/auditoria.model'

const controller = {};

controller.findAll = (req, res) => {
  Auditoria.find()
    .then(auditorias => {
      res.send(auditorias);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al intentar obtener auditorias"
      });
    });
};

export default controller;