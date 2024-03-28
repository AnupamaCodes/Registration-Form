const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Users = require('./models/users')
const app=express()

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("", require("./routes/register")); 


app.listen(7080,()=>{
    console.log(`Server started at http://127.0.0.1:7080}`);
})



