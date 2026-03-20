const express = require('express');
const router = express.Router();
const restaurantService = require('../Services/RestaurnatService');
const { verify } = require('jsonwebtoken');

router.get('/',  (req,res)=>{
    restaurantService.getRestaurants((err,list)=>{
        if(err) return res.status(500).json({error:err.message});
        if(list == "") return res.status(404).json({message:"No Restaurant found"})
        res.status(200).json(list);
   });
   
})

router.get('/name/:name',(req,res)=>{
    rest_name = req.params.name;
    restaurantService.getRestaurantsByName(rest_name,(err,list)=>{
        if(err) return res.status(500).json({error:err.message});
        if(list == "") return res.status(404).json({message:"No Restaurant with that name"})
        res.status(200).json(list);    
    })
})

router.get('/location/:location',(req,res)=>{
    rest_location = req.params.location;
    restaurantService.getRestaurantsByLocation(rest_location,(err,list)=>{
        if(err) return res.status(500).json({error:err.message});
        if(list == "") return res.status(404).json({message:"No restaurant on that location"});
        res.status(200).json(list);
    })
})

module.exports = router;