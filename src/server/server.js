// Importing
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path');
const cors = require('cors')
const config = require('../config.json'); // Config file for mongodb connection 

const app = express();
const router = express.Router();


mongoose.connect(config.database.mongoPass,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const Data = require('../models/data') // Require schema we created


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors()) // Enable cors

app.post('/server/signup', function (req, res) {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(req.body.email)){ // Validate the email, we are doing this in backend too since the user can disable javascript
      var registerData = new Data({ // Create new Data with the request bodies
        email:req.body.email,
        password:req.body.password,
        date:Date.now()
      })
      registerData.save().then(() => { // Save the data and send client information
        res.send("Registiration Successful")
        console.log("User Saved")
    })
      .catch(err => {
        console.log(err)
        res.send("Registiration Failed")
      })

    }
});

app.post('/server/login',function(req,res){ 
  Data.findOne({ // Look for the account in the database and responde according to it.
    email:req.body.email,
    password:req.body.password
  },(err,data) =>{
    if(data){
    res.send("Logged in"); // Respond with success if we are successful
    }
    if(!data){
      res.send("Failed") // Respond with failed if there was no data in the database
    }
  })
})

app.get('/', function (req, res) {
  res.send("Hello!")
});

app.listen(443,function(err){
  if(err){
    console.log(err);
  }
  else{
    open('http://0.0.0.0:'+'443')
  }
});