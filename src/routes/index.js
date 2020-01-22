const express = require('express');
const usuariosRoute = require('./users');
const authenticate = require('./authentication');

const router = express.Router();

router.use('/authentication', authenticate);
router.use('/users', usuariosRoute);
router.get('/', (req, res) => res.send('App Online!'));

module.exports = router;
