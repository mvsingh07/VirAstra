const express = require("express");
const bodyParser = require('body-parser');
const  dbConn = require('./dbConnection');
const cors = require('cors');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
// const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(cors());

const port = 4000;

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const nameRegex = /^[A-Za-z ]{3,}$/;

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mvsinghsays@gmail.com',
    pass: 'vugxosqvfptnefjg'
  }
});

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

    
    else if (!nameRegex.test(name)) {
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


app.use('/contacts', (req, res,next) => {
    const Email = req.body.Email;
    const Mobile = req.body.Mobile;
    const Name = req.body.Name;
    const Message = req.body.Message;
    if (!emailRegex.test(Email)) {

        return res.status(301).json({
            message: "Invalid email format!",
            token: ""
        });    
    }  
    
    else if (!phoneRegex.test(Mobile)) {
        res.status(302).json({
            message: "Invalid phone number format!",
            token: ""
        }); 
    }
  
    
    else if (!nameRegex.test(Name)) {
        res.status(304).json({
            message: "Name is required!",
            token: ""
        });
    }
    else if (!nameRegex.test(Message)) {
        res.status(305).json({
            message: "Message is required!",
            token: ""
        });
    }
    else {
     next();
    // res.status(786).json({
    //     message:"Form Submitted",
    //     token:""
    // })
    // let query = "INSERT INTO contacts (Name, Email, Mobile, Message) VALUE(?,?,?,?)";
    
    // let data = [req.body.Name,req.body.Email,req.body.Mobile,req.body.Message];
    // dbConn.query(query,data, (error,result, fields)=>{


    //     res.status(555).json({
    //         message: "Message Conveyed",
    //         token:""
    //     })
    //     console.log("Message sent")
    // }, (err) => {
    //     console.log(err);
    // });
    }
});


// app.post('/contacts', async (req,res) => {
   
//     let query = "INSERT INTO contacts (Name, Email, Mobile, Message) VALUE(?,?,?,?)";
    
//     let data = [req.body.Name,req.body.Email,req.body.Mobile,req.body.Message];
//     dbConn.query(query,data, (error,result, fields)=>{


//         res.status(786).json({
//             message: "Message Conveyed",
//             token:""
//         })
//         console.log("Message sent")
//     }, (err) => {
//         console.log(err);
//     });
// });

app.post('/contacts', async (req, res) => {
    // Check if all fields are filled
    if (!req.body.Name || !req.body.Email || !req.body.Mobile || !req.body.Message) {
      return res.status(409).json({ message: "All fields are required" });
    }
  
    let query = "INSERT INTO contacts (Name, Email, Mobile, Message) VALUE(?,?,?,?)";
    let data = [req.body.Name, req.body.Email, req.body.Mobile, req.body.Message];
  
    dbConn.query(query, data, (error, result, fields) => {
      if (error) {
        console.log(error);
        // return res.status(511).json({ message: "Internal server error" });
      }
      else{ console.log("status set to 555")
      res.status(555).json({ message: "Form Submitted", token: "" });}
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



// app.use((req,res,next)=>{
//     if(req.headers.authorization === undefined){
//         res.send({
//             status: 'error',
//             message: 'Undefined Token',
//             token:''
//         });
//     }
//     let splitedToken = req.headers.authorization.split(' ');
//     if(splitedToken[1] === undefined){
//         res.send({
//             status: 'error',
//             message: 'Undefined splitted token!'
//         });
//     }
//     jwt.verify(splitedToken[1], 'secret-key',(err,user)=>{
//         if(!err){
//             next();
//         }else{
//             res.send({
//                 'status': 'error',
//                 'message': 'unable to authenticate'
//             });
//         }
//     })
// });


app.use('/forgotPassword', (req, res, next) => {
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
app.post('/forgotPassword', async (req, res) => {
    const email = req.body.email;
    const newPassword = Math.random().toString(36).slice(-8); // Generate random password
    const hashPassword = await bcrypt.hash(newPassword, 3);
    const updateQuery = "UPDATE users SET password = ? WHERE email = ?";
    const updateData = [hashPassword, email];
    dbConn.query(updateQuery, updateData, (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error!", token: "" });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: "Email id does not exist!", token: "" });
      } else {
        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Password Reset",
          text: `Your new password is ${newPassword}. Please change it after logging in.`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error!", token: "" });
          } else {
            console.log("Email sent: " + info.response);
            res.status(200).json({ message: "Password reset successful!", token: "" });
          }
        });
      }
    });
  });
// function generateNewPassword(length = 8) {
//     const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let password = '';
//     for (let i = 0; i < length; i++) {
//       password += chars[Math.floor(Math.random() * chars.length)];
//     }
//     return password;
//   }

//   function saveNewPasswordToDatabase(email, newPassword) {
//     let query = "UPDATE users SET password = ? WHERE email = ?";
//     let data = [newPassword, email];
//     dbConn.query(query, data, (error, result, fields) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Password updated successfully!");
//       }
//     });
//   }
  

// app.post('/forgotPassword', (req, res) => {
//     const { email } = req.body; 
//     // check if the email is valid and exists in the database
//     // generate a new password
//     // save the new password to the database
//     // send an email with the new password to the user's email address
//     const newPassword = generateNewPassword(); // implement this function
//     saveNewPasswordToDatabase(email, newPassword); // implement this function
  
//     // send email
//     const mailOptions = {
//       from: 'mvsinghsays@gmail.com',
//       to: email,
//       subject: 'New Password for Your Account',
//       text: `Your new password is ${newPassword}`
//     };
  
//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log("There is an Internal Server Error");
//         res.status(500).json(
//             { 
//                 message: 'Internal Server Error'
//              });
//       } else {
//         console.log('Email sent: ' + info.response);
//         res.status(200).json({ message: 'Email sent successfully' });
//       }
//     });
//   });




// app.get('/users',(req,res)=>{
//     let query = "SELECT * FROM users";
//     dbConn.query(query, async(error, result)=>{
//         res.send(result);
//     })
// });

// app.get('/user/:id',(req,res)=>{
//     let query = "DELETE FROM users WHERE id = ?";
//     let data = [req.params.id];
//     dbConn.query(query,data,(error, result)=>{
//         res.send({'status':'OK','message':'User deleted successfully!'});
//     })
// });

app.listen(port,() => console.log(`Server started at port: ${port}`));
