const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Users = require('../../models/Users');
const {loginValid, registerValid} = require('../../validation');

const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    const {error} = registerValid(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    const emailCheck = await Users.findOne({email: req.body.email});

    if(emailCheck) {
        return res.status(400).send('Email arlready exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    });
    try {
        const saveUser = await user.save();
        res.send(saveUser);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.post('/login',  async (req, res) => {
    const {error} = loginValid(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    const user = await Users.findOne({email: req.body.email});
    if(!user) {
        return res.status(400).send('Email wrong');
    }
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) {
        return res.status(400).send('Invalid password');
    }

    const token = jwt.sign({_id: user._id}, process.env.TOKEN);
    res.header('auth-token', token).send(token);
});

module.exports = router;
