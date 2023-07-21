var  jwt = require('jsonwebtoken');  
const JWT_SECRET = "zaidkhanisaverygoodboy";  // header of JWT

const fetchuser = (req , res , next) =>{

    //get the user from the jwt token and add it to the req object
    const token = req.header('auth-token') //passing a header named as auth-token
    // console.log(token)  
    if(!token) {
        res.status(401).send({error: "hello Please authrenticate with valid token"})

    }
    try {       
        const data = jwt.verify(token , JWT_SECRET ,
        //     (err, verifiedJwt) => {
        //     if(err){
        //       res.send(err.message)
        //     }else{
        //       res.send(verifiedJwt)
        //     }
        //   }
          );
        req.user = data.user;  //passing user id
        next() ;

    } catch (error) {
        res.status(401).send({error: "Please authenticate with valid token!!!!"})

        
    }


}


module.exports = fetchuser;

