const express = require('express');
const usuariosRoute = require('./users');
const authenticate = require('./authentication');
const posts = require('./posts')
const morgan = require('morgan');
const dotenv = require('dotenv').config();

const router = express.Router();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

router.use('/posts', posts)
router.use('/authentication', authenticate);
router.use('/users', usuariosRoute);
router.get('/', (req, res) => res.send('App Online!'));

module.exports = router;
