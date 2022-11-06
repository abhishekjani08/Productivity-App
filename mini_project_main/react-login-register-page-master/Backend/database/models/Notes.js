import mongoose, { Schema } from 'mongoose';
// const { Schema } = mongoose;
//it is just schema of a notes

const NotesSchema = new Schema({
    title :{
        type: string,
        required: true ,  
    },
    description:{
        type : string, 
        required: true,
        // unique : true
    } ,
    tag:{
        type : string, 
        // required: true,
        default : "Basic General Tag"
        // unique : true
    } 
 
});

module.exports = mongoose.model("notes" , NotesSchema)
// export.module = 