/* -------------------------------------------- */
/*             //* pathHandler.mid.js           */
/* -------------------------------------------- */
import { cliError } from '../lib/functions/cliLogs.js'

export default function pathHandler (req, res, next) {
  const msg = `${req.method} ${req.originalUrl} endpoint not found` 
  cliError(msg)
  return res.json({
    status: 404,
    response: msg
  });
};