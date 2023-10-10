const express = require('express');

const router = express.Router();

const user_controller = require('../controllers/users');

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
  user_controller.getUsers(req,res);
})

router.get('/all', (req,res) => {
  res.status(200).send("all users");
})

router.get('/:id', (req,res) => {
  const id = req.params.id;
  res.status(200).send(`user ${id}`);
})

router.post('/', (req,res) => {
  console.log(req.body);
  user_controller.create(req,res);
})

router.post('/login', (req,res) => {
  console.log(req.body);
  user_controller.login(req,res);
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