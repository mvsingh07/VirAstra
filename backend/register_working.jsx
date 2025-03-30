const express = require("express");
const bodyParser = require('body-parser');
const  dbConn = require('./dbConnection');
const cors = require('cors');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(cors());

const port = 4000;

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


// Middleware for email validation
app.use('/register', (req, res, next) => {
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const name = req.body.name;
    if (!emailRegex.test(email)) {

        return res.status(400).json({
            message: "Invalid email format!",
            token: ""
        });    
    }  
    
    else if (!phoneRegex.test(phone)) {
        res.status(402).json({
            message: "Invalid phone number format!",
            token: ""
        }); 
    }
    else if (!passwordRegex.test(password)) {
        res.status(403).json({
            message: "Invalid Password!",
            token: ""
        });
    }

    
    else if (!name) {
        res.status(404).json({
            message: "Name is required!",
            token: ""
        });
    }
    else {
        let query = "SELECT * FROM users WHERE email = ?";
        let data = [email];
        dbConn.query(query, data, (error, result) => {
            if (result.length > 0) {
                res.status(701).json({
                    message: "Email id already exists!",
                    token: ""
                })
            } else {
                next();
            }
        });
    }
});

app.post('/register', async (req,res) => {
    let query = "INSERT INTO users (name, age, gender, email, phone, password) VALUE(?,?,?,?,?,?)";
    let hashPassword = await bcrypt.hash(req.body.password,3);
    let data = [req.body.name,req.body.age,req.body.gender,req.body.email,req.body.phone,hashPassword];
    dbConn.query(query,data, (error,result, fields)=>{
        res.status(786).json({
            message: "Registeration Successfull",
            token:""
        })
    }, (err) => {
        console.log(err);
    });
});

app.post('/login',(req,res)=>{
    let query = "SELECT * FROM users WHERE email = ?";
    let data = [req.body.email];
    dbConn.query(query,data, async (error,result)=>{
        if(result.length > 0){
            let passwordVerify = await bcrypt.compare(req.body.password,result[0].password);
            if(passwordVerify){
                res.status(200).json({
                    message: "User logged in successfully!",
                    token: jwt.sign({
                        email: result[0].email,
                        phone: result[0].phone
                    },'secret-key',{"expiresIn": "1h"}),
                    user: result[0]
                });
            }else{
                res.status(401).json({
                    message: "User incorrect !",
                    token: "",
                });
            }
        }else{
            res.status(401).json({
                message: "User  incorrect!",
                token: "",
            });
        }
    });
});



app.use((req,res,next)=>{
    if(req.headers.authorization === undefined){
        res.send({
            status: 'error',
            message: 'Undefined Token',
            token:''
        });
    }
    let splitedToken = req.headers.authorization.split(' ');
    if(splitedToken[1] === undefined){
        res.send({
            status: 'error',
            message: 'Undefined splitted token!'
        });
    }
    jwt.verify(splitedToken[1], 'secret-key',(err,user)=>{
        if(!err){
            next();
        }else{
            res.send({
                'status': 'error',
                'message': 'unable to authenticate'
            });
        }
    })
});


app.use('/forgetPassword', (req, res, next) => {
    const email = req.body.email;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "Invalid email format!",
            token: ""
        });    
    }  
    else {
        let query = "SELECT * FROM users WHERE email = ?";
        let data = [email];
        dbConn.query(query, data, (error, result) => {
            if (result.length === 0) {
                res.status(404).json({
                    message: "Email id does not exist!",
                    token: ""
                })
            } else {
                next();
            }
        });
    }
});

app.post('/forgetPassword', async (req,res) => {
    const email = req.body.email;
    const newPassword = Math.random().toString(36).slice(-8); // Generate random password
    const hashPassword = await bcrypt.hash(newPassword, 3);
    const updateQuery = "UPDATE users SET password = ? WHERE email = ?";
    const updateData = [hashPassword, email];
    dbConn.query(updateQuery, updateData, (error,result, fields)=>{
        if (error) {
            console.log(error);
            res.status(500).json({
                message: "Error resetting password!",
                token:""
            })
        } else {
            // Send email with new password
            // Replace this code with your email sending functionality
            const msg = {
                to: email,
                from: 'noreply@example.com',
                subject: 'Password reset request',
                text: `Your new password is ${newPassword}. Please change your password after login.`,
                html: `<strong>Your new password is ${newPassword}. Please change your password after login.</strong>`,
            };
            sgMail.send(msg);
            res.status(200).json({
                message: "Password reset successfully! Please check your email.",
                token:""
            })
        }
    });
});

app.get('/users',(req,res)=>{
    let query = "SELECT * FROM users";
    dbConn.query(query, async(error, result)=>{
        res.send(result);
    })
});

app.get('/user/:id',(req,res)=>{
    let query = "DELETE FROM users WHERE id = ?";
    let data = [req.params.id];
    dbConn.query(query,data,(error, result)=>{
        res.send({'status':'OK','message':'User deleted successfully!'});
    })
});

app.listen(port,() => console.log(`Server started at port: ${port}`));
