const db = require('../Database/db');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

function register(name,email,password,done){   

    db.connect();
    sql_check = 'SELECT email FROM Users WHERE email=?';
    db.query(sql_check,[email],(err,results)=>{
        if (results.length > 0){
            return done(new Error("Email already exist"),null);
        }
    })

    sql = 'INSERT INTO Users (name,email,password,reservations) VALUES(?,?,?,"[]")'
    
    db.query(sql,[name, email, password], (err,results)=>{

        if(err) return done(err, null)
        db.end;

        newUser = {
            id : results.insertId,          
            name : name,
            email : email,
            reservations: []
        };
        done(null, newUser)
    })
}

function login(email, password, done) {

    const sql = 'SELECT * FROM Users WHERE email = ?';

    db.query(sql, [email], (err, results) => {
        if (err) return done(err, null);
        if (results.length === 0) return done(new Error("Email doesn't exist"), null);

        const user = results[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return done(err, null);     
            if (!isMatch) {
                return done(new Error("Incorrect password"), null);
            }

            const loggedUser = {
                id: user.id,
                name: user.name,
                email: user.email,
                reservations: JSON.parse(user.reservations || "[]")
            };

            done(null, loggedUser);
        });
    });
}

module.exports = {register,login}