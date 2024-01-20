const mongoose = require("mongoose");
const cors = require("cors");
const { EmployeeModel } = require('./models/Employee');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/employee')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });

app.post('/login',(req,res)=>{
  const {email,password}=req.body;
  EmployeeModel.findOne({email:email})
    .then (user=>{
      if(user){
        if(user.password==password){
          res.json("Success")
        } else{
             res.json("the password is incorrect")
        }

      }
      else{
         res.json("No record Existed")
      }
    })
})
app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.json(err));
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});