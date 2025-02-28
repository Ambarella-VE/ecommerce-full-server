/* -------------------------------------------- */
/*              //* orders.router.js            */
/* -------------------------------------------- */
import express from 'express';


const router = express.Router();

// TODO - orders router

//? Get all
router.get('/', (req, res,next) => {
  //TODO - get all
  next();
}); 

//? Add one
router.post('/', (req, res,next) => {
  //TODO - add one
  next();
});

//? Add many
router.post('/bulk', (req, res, next) => {
  //TODO - Add many
  next();
});  

//? Update many
router.put('/bulk', (req, res, next) => {
  //TODO - Add many
  next();
});  

//? Update one
router.put('/:oid', (req, res, next) => {
  //TODO - Update many
  next();
});

//? Get one
router.get('/:oid', (req, res, next) => {
  //TODO - Get by ID
  next();
});

//? Get by user ID
router.get('/user/:uid', (req, res, next) => {
  //TODO - Get by User ID
  next();
});

//? Delete one
router.delete('/:oid',(req,res, next) => {
  //TODO - Delete one
  next();
});


export default router;