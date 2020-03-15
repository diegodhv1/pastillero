import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import logger from './logger';
const mongoose = require('mongoose');

import { medicamentos, pacientes, dosificaciones, alarmas, auditorias } from './routes/';
import { envs } from './config/';
import { initBoard } from './arduino/prototipo/prototipo';

mongoose.Promise = global.Promise;

mongoose.connect(envs.url, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

let app = express();
app.server = http.createServer(app);

logger.stream = {
  write: function (message) {
    logger.info(message);
  }
};

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
  exposedHeaders: envs.server.corsHeaders
}));

app.use(bodyParser.json({
  limit: envs.server.bodyLimit
}));

//Index route
app.use('/api', medicamentos);
app.use('/api', pacientes);
app.use('/api', dosificaciones);
app.use('/api', alarmas);
app.use('/api', auditorias);

//Initialize Arduino Uno
initBoard();

const listener = app.server.listen(process.env.PORT || envs.server.port, () => {
  logger.info('server started - ' + listener.address().port);  
});

module.exports = app;
