const express = require('express');

const router = express.Router();



/**
 * @swagger
 * /users:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */

const user = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  }
]

router.get('/', (req,res) =>{
  console.log(user)
  res.status(200).send('users');
})

router.get('/all', (req,res) => {
  res.status(200).send("all users");
})

router.get('/:id', (req,res) => {
  const id = req.params.id;
  res.status(200).send(`user ${id}`);
})

router.post('/', (req,res) => {
  res.status(200).send("user created");
})

router.put('/:id', (req,res) => {
  const id = req.params.id;
  res.status(200).send(`user ${id} updated`);
})

router.delete('/:id', (req,res) => {
  const id = req.params.id;
  res.status(200).send(`user ${is} deleted`)
})

module.exports = router;