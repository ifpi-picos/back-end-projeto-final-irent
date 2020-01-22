const express = require('express');
const UsersController = require('../controllers/users');
const User = require('../models/user');
const message = require('../utils/message.json');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')

const router = express.Router();

function generateToken(params = {}){
    return jwt.sign(params , authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post('/', async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user){
        return res.status(400).send({ error: 'User not found' });
    }

    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({ error: 'Invalid password' });
    }    
    
    user.password = undefined;

    res.send({ 
        user, 
        token: generateToken({ id: user.id }),  
    });

});

module.exports = router;