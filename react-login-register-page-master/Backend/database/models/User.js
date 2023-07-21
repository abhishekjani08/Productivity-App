
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;
const  bcrypt = require('bcryptjs');
const JWT_SECRET = "zaidkhanisaverygoodboy";  // header of JWT


//it is just a schema of user

const UserSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true   
    },
    email:{
        type : String, 
        required: true,
        unique : true
    } ,
    password:{
        type : String , 
        required: true,
        unique : true
    } ,
    tokens:[
        {
            token:{
                type: String,
                required: true   

            }
        }
    ]
 
});

UserSchema.methods.generateAuthToken = async function(){

    try {
        //generating tokem
        let token = jwt.sign({_id: this.id} , JWT_SECRET ) 
        //inserting token to the database
        this.tokens = this.tokens.concat({token: token})
        await this.save();
        return token;
        
    } catch (error) {
        console.log(err )
        
    }
}
//creting a differnt indexfor all the user to avoid the repeititon 
const User = mongoose.model("User" , UserSchema);
const ind = User.createIndexes(); //use to create a index for all the user o avoid the repetition of the same entery int the database
console.log(ind)

module.exports =  User

