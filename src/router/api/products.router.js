/* -------------------------------------------- */
/*             //* products.router.js           */
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
router.put('/:pid', (req, res, next) => {
  //TODO - Update many
  next();
});

//? Get one
router.get('/:pid', (req, res, next) => {
  //TODO - Get by ID
  next();
});

//? Delete one
router.delete('/:pid',(req,res, next) => {
  //TODO - Delete one
  next();
});


export default router;