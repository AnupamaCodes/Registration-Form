const express = require("express");
const router = express.Router();
const Users = require('../models/users'); // Import the Users model
const path = require('path')

router.post("/add", async (req, res) => {
    try{
    var fullname = req.body.fullname;
    var emailAddress = req.body.emailAddress;
    var mobileNo = req.body.mobileNo;
    var course = req.body.course;
    var Address = req.body.Address;
    var gender = req.body.gender;
      // Check if the course field is provided
      if (!course) {
        return res.status(400).send("Course is required."); // Return a 400 Bad Request response if course is missing
    }
    // if (!fullName) {
    //     return res.status(400).send("Full Name is required."); // Return a 400 Bad Request response if fullName is missing
    // }

    
    var data = {
        "fullName": fullname,
        "emailAddress": emailAddress,
        "mobileNo": mobileNo,
        "course" : course,
        "Address" : Address,
        "gender": gender,
    };
    console.log(data);
    await Users.create(data); // Using await to wait for the promise to resolve
    console.log("Record Inserted Successfully");
    return res.redirect('Registered_successfully.html');
} catch (error) {
    console.error(error);
    return res.status(500).send("Error occurred while registering user.");
}
});

router.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect('index.html');
});

module.exports = router;
