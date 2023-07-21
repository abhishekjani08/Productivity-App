const mongoose = require('mongoose')
// const URI  = "mongodb+srv://zaidkhan:zaidkhan@cluster0.yaayghh.mongodb.net/FirstDatabase?retryWrites=true&w=majority";
const URI  = "mongodb://localhost:27017/Zdb";


//function used ot connect with database
const connectToMongo = ()=>{
    mongoose.connect(URI , () =>{
        console.log("connected to mongoose succesfully")
    })
}
module.exports = connectToMongo; // no function is exported
