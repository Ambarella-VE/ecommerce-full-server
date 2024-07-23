/* ---------------------------------------- */
/*            //* ErrorHandler.mid.js       */
/* ---------------------------------------- */

import { cliError } from '../lib/function/cliLogs';

export default function errorHandler(err, req, res, next) {
  cliError(err.stack);
  return res.json({
    statusCode: err.statusCode || 500,
    message: `${req.method} ${req.url} ${err.message || 'Something broke!'}`
  })
}