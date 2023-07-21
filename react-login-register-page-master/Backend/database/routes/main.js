//this is used for authentication
const express = require("express");
const router = express.Router();  //ruoter is the module
const User = require("../models/User");  //model 
const { body, validationResult } = require('express-validator');  //import express validator
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  
const fetchuser = require('../Middleware/fetchuser')


const JWT_SECRET = "zaidkhanisaverygoodboy";  // header of JWT
router.post('/cal', [ //checking the validation
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 }),
],
    //This will return a bad request of error occurs if the usre put any bad things int he above code
    async (req, res) => { //returns promise
        let sucess = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ sucess , errors: errors.array() });
            // return "Bakwass"
            //In the above code, we have set that if error.empty didn’t return a true value, then show a 400 bad request error and send the specific errors details.
        }
        try {
            //we are finding the unique email
            const userEmail = req.body.email 
            let user = await User.findOne({ email: userEmail});
            if (user) {
                console.log(user)
                return res.status(400).json({sucess , errors: "This user already(email) exist in database" });
            }
            var ogpassword = req.body.password;
            var saltRounds = 10

            //old one
            const salt = await bcrypt.genSalt(saltRounds); //number of salt round is 10
            const securepass = await bcrypt.hash(ogpassword, salt)  //returning the hash function
            //we are not using a save function for now we are creating a user to save the value to the databasef
            user = await User.create({
                name: req.body.name,
                // password: req.body.password, //creating a user by simply passing the pass as a plain text
                password: securepass,
                email: req.body.email,
            })
            const data = {
                id: user.id // here i am using the id of  the user created in DB 
            }
            const jwtData = jwt.sign(data, JWT_SECRET) //
            sucess = true;
            // res.json(user)
            res.json({sucess , jwtData}) //
            // res.send(user)




        } catch (error) {
            // console.log(error) ,
            // console.error(error.message) ;
            console.error(error.message)

            // res.send(error.message + "pls try valid")
            res.status(500).send( "Pls try again later")

        }



        console.log("user registered successfully")
    });

router.post('/login', [ //checking the validation
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password cannot be blank').isLength({ min: 5 }),
],
    async (req, res) => { //returns password
        let sucess = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        
        }
        const {email , password} = req.body ;
        try {
            let token;
            let user = await User.findOne({ email}); //returning password
            //hacker case : = > sending error to hacker
            if (!user) {
                return res.status(400).json({ errors: "PLease try to login with proper credential" });

            }
            const comparepassword = await bcrypt.compare(password , user.password)   // compare takes the string and hashstring as an input the hashstring is pasword hashstring present inside teh DB, and it checkes that automatically the req.body password and OG hashstring

            if(!comparepassword) {
                sucess = false
                return res.status(400).json({ sucess , errors: "PLease try to login with proper credential password dorsnt compared" });

            }
            const data = {
                id : user.id
                
            }
             token = await user.generateAuthToken()
             res.cookie("jwtoken" , token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
             });

             
            const authtoken= jwt.sign(data, JWT_SECRET)
            sucess = true
            res.json({sucess , authtoken})
            console.log(authtoken)

            console.log(user.id) //just consoling the user-id
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Pls try again later")

            
        }
    }) ;
router.post('/getuser', fetchuser , async (req, res) =>{   
    try {
        let userId = req.user.id ; //have to fetch userid
        const user =  await User.findById(userId).select("-password")
        res.send(user)  
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server Error");
    }

})
module.exports = router;