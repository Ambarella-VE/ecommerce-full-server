/* -------------------------------------------- */
/*              //* index.router.js             */
/* -------------------------------------------- */
import express from 'express';
import apiRouter from './api/api.router.js';

const router = express.Router();

router.use('/api', apiRouter);

export default router;