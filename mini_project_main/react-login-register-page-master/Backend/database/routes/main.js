//this is used for authentication
const express = require("express");
const router = express.Router();  //ruoter is the module
const User = require("../models/User");  //model 
const { body, validationResult } = require('express-validator');  //import express validator
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  
const fetchuser = require('../Middleware/fetchuser')


const JWT_SECRET = "zaidkhanisaverygoodboy";  // header of JWT
// const jwt = require(jsonwebotken);

//simple Basic  code
//one can use Router() to take request from the content body
// router.get( "/" , function(req , res){
//     //level-02
//     //simple code level-01
//     // const user = User(req.body);  // taking a request from the req.body i.e fmom the client
//     // console.log(req.body)
//     // // res.send("Hello zaid this is main.js");
//     // res.send(req.body); //here sending the request came from the user body
//     user.save(); //saving he data to the database


// }    )


//creating a endpoint-1  
//Route 1: Endpoint use to create a user and port:  /api/user/cal  no login requred
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
        //Check Whether email exist 
        //This will check whether this email exist and the later work will be carry-on so this returns promise
        //putting al the code inside the try block to prevent from syntax error
        try {
            //we are finding the unique email
            const userEmail = req.body.email 
            let user = await User.findOne({ email: userEmail});
            if (user) {
                //chekcing the email exist or not
                //send the bad request
                console.log(user)
                return res.status(400).json({sucess , errors: "This user already(email) exist in database" });
            }

            // creating a bycyrpt hash function 
            //which is use ot generate the has value of the pasword
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
            //JWT is a URL generated which has a subpart as 1. header(in this case JWT_SECERT ,) 2. data / payload 3. signature
            //Every user who has putted its credential into the database has their diferrent value of signature generated
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



//Route 2: Endpoint use to create a user and port:  /api/user/cal  no login requred
//This reauest will be given to the /api/user/clogin
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
                //if it is not a user then we are authtenticating a user on the basis of gmail only
                //send the bad request
                return res.status(400).json({ errors: "PLease try to login with proper credential" });

            }

            //ideal case check the password by comparing the hashcode
            //user.password is the pasword of  the database
            const comparepassword = await bcrypt.compare(password , user.password)   // compare takes the string and hashstring as an input the hashstring is pasword hashstring present inside teh DB, and it checkes that automatically the req.body password and OG hashstring

            if(!comparepassword) {
                sucess = false
                return res.status(400).json({ sucess , errors: "PLease try to login with proper credential password dorsnt compared" });

            }
            const data = {
                id : user.id
                
            }

            //generating auth token we can wrtie secret key  in snv fiel 
             token = await user.generateAuthToken()
            //  res.json(token)
            //  console.log(token)

             //seetinf it into the cookies
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

    


//Route 3: Get Logged in user details using : POST "/api/user/getuser"  Login required
// using token we fetch data
//have to send token 
/*
1. Generate JWt token and stored it in database // we generally do it to verify the user when it try to login we give them auinique token for verification

2. How to stored the token in cookies
3. get token from Cookie and verify the user
*/



router.post('/getuser', fetchuser , async (req, res) =>{
    //fetchusr is useed to getthe user
    
    try {
        let userId = req.user.id ; //have to fetch userid
        // res.json(userId)
        // console.log(userId)
        const user =  await User.findById(userId).select("-password")
        res.send(user)  //sending the use only except  the pasword
        // console.log(user) //extra
 
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server Error");
    }

})
 


//there is need to test the loggedin user 
//
module.exports = router;





/* 
*created a backedn api which will get the send the proper validate data to the database [checking validation , senidng an error if occures , creating a user , ]


*/