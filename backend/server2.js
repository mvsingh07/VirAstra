const express = require("express");
const bodyParser = require('body-parser');
const dbConn = require('./dbConn');
const cors = require('cors');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const app = express();
const SECRET_KEY = "NOTESAPI";

app.use(express.json());

app.use(bodyParser.json());

app.use(cors());

const port = 8020;


app.use('/register', (req, res, next) => {
    let query = "SELECT * FROM reg_users WHERE email = ?";
    let data = [req.body.email];
    dbConn.query(query, data, (error, result) => {
        if (result.length > 0) {
            res.send({ 'status': 'error', 'message': 'Email id already exists!' });
           // alert("Email Id Already Exist");
        } else {
            next();
        }
    });
});
app.post('/register', async (req, res) => {
    let query = "INSERT INTO reg_users (name, email, password) VALUE(?,?,?)";
    let hashPassword = await bcrypt.hash(req.body.password, 3);
    let data = [req.body.name, req.body.email, hashPassword];
    dbConn.query(query, data, (error, result, fields) => {
        res.send({ 'status': 'OK', 'message': 'User registed successfully!' });
    }, (err) => {
        console.log(err);
    });
});

app.post('/signin', (req, res) => {
    let query = "SELECT * FROM reg_users WHERE email = ?";
    let data = [req.body.email];
    dbConn.query(query, data, async (error, result) => {
        if (result.length > 0) {
            let passwordVerify = await bcrypt.compare(req.body.password, result[0].password);
            if (passwordVerify) {
                res.json({
                    message: "User logged in successfully!",
                    token: jwt.sign({
                        
                        email: result[0].email,
                        phone:result[0].phone
                    }, 'SECRET_KEY', { "expiresIn": "20m" }),
                    user: result[0]
                });
            } else {
                res.json({
                    message: "User details are incorrect!",
                    token: "",
                });
            }

        } else {
            res.json({
                message: "can't run query!",
                token: "",
            });
        }

    });
});

app.use((req, res, next) => {
    if (req.headers.authorization === undefined) {
        res.send({
            status: 'error',
            message: 'undefined token!'
        });
    }
    let splitedToken = req.headers.authorization?.split(" ");
    if (splitedToken[1] === undefined) {
        res.send({
            status: 'error',
            message: 'undefined splitted token!'
        });
    }
    jwt.verify(splitedToken[1], 'SECRET_KEY', (err, user) => {
        if (!err) {
            next();
        } else {
            res.send({
                'status': 'error',
                'message': 'unable to authenticate'
            });
        }
    })
});

app.get('/profile', (req, res) => {
    let query = "SELECT * FROM reg_users WHERE email = ?";
    let data = [req.query.email];
    dbConn.query(query, data, async (error, result) => {
        res.send(result);
    })
});

app.put('/profile_update',async (req, res) => {
    let query= "UPDATE reg_users SET name=?, country=?,phone=? where email=?"
    let data = [req.body.name, req.body.country,req.body.phone, req.query.email];
    dbConn.query(query, data, (error, result, fields) => {
        res.send({ 'status': 'OK', 'message': 'Updation done!' });
    }, (err) => {
        console.log(err);
    });
});

app.post('/add_channel', (req, res) => {
    let query = "INSERT INTO channels (u_id,url,pps)) VALUE(?,?,?)";
        let data=[req.body.id, req.body.url, req.body.pps];
        dbConn.query(query, data, (error, result, fields) => {
            res.send({ 'status': 'OK', 'message': 'Channel Added!' });
        }, (err) => {
            console.log(err);
        });
    
});
