const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();
const userService = require('../Services/UserService')



//REGISTER
router.post('/register', (req, res) => {
    name = req.body.name;
    email = req.body.email;
    password =req.body.password;

    hashed_pass = bcrypt.hashSync(password,5);

    userService.register(name, email, hashed_pass, (err,newUser)=>{
        if(err) return res.status(500).json({error: err.message })
        res.status(201).json(newUser);
    });
});






//LOGIN
router.post('/login',(req,res)=>{
    email = req.body.email;
    password = req.body.password;

    userService.login(email,password,(err,loggedUser)=>{

        if(err) return res.status(500).json({error: err.message})
        if(loggedUser == null) return res.status(404).json({message : "No User Found"});

        const payload ={
            id : loggedUser.id,
            email : loggedUser.email      
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET,{
            expiresIn: "1h"
        });
        
        
        res.status(200).json({
            user:loggedUser,
            token: token
        })
    })
})

module.exports = router;