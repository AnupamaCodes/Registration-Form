const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/UserDb').then(()=>{
    console.log("MongoDB connected");
}).catch(error=>{
console.error('Connection error:',error);
});
const userSchema = new mongoose.Schema({
    fullName : {type: String, required:true},
    emailAddress: {type:String, required: true,unique:true },
    mobileNo : {type:String, required: true, unique:true},
    course: {type:String, required: true},
    Address :  {type:String, required: true},
    gender : {type:String, required: true},
});
const Users = mongoose.model('Users',userSchema);
module.exports =  Users;