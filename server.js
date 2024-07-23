/* -------------------------------------------- */
/*                 //* server.js                */
/* -------------------------------------------- */
import express from 'express';
import morgan from 'morgan';
import __dirname from './utils.js';
import {
  errorHandler,
  pathHandler
} from './src/middleware/index.mid.js';
import router from './src/routes/index.routes.js';
import { cliNotice } from './src/lib/function/cliLogs.js';

/* --------- //# Server Conficuration --------- */
const server = express();
const PORT = process.env.PORT || 8080;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(`${__dirname}/public`));

/* ---------------- //# Routes ---------------- */
server.use('/',router)

/* -------------- //# Middlewares ------------- */
server.use(morgan('dev'));
server.use(errorHandler);
server.use(pathHandler);

/* --------- //# Server Initialization -------- */
function ready() {
  cliNotice(`Server is running on port ${PORT}`);
}
server.listen(PORT, ready);