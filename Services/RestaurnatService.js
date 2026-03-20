const db = require('../Database/db');

function getRestaurants(done){
    db.connect;
    sql = 'SELECT * FROM Restaurants'

    db.query(sql,(err,results)=>{

        if(err) return done(err,null);
        return done(null,results);
    })
}

function getRestaurantsByName(name,done){
    db.connect;
    sql = 'SELECT * FROM Restaurants WHERE name = ?'

    db.query(sql,[name],(err,results)=>{
        if(err) return done(err,null);
        return done(null,results);
    })
}

function getRestaurantsByLocation(location,done){
    db.connect;
    sql = 'SELECT * FROM Restaurants WHERE location = ?'

    db.query(sql,[location],(err,results)=>{
        if(err) return done(err,null);
        return done(null,results);
    })
}

module.exports = {getRestaurants,getRestaurantsByName,getRestaurantsByLocation} 