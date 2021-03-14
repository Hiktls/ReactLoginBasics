// Importing
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path');
const cors = require('cors')
const config = require('../../config.json');

const app = express();
const router = express.Router();


mongoose.connect(config.database.mongoPass,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const Data = require('../../models/data')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())
var accArr = [];


app.post('/server/signup', function (req, res) {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(req.body.email)){
      var registerData = new Data({
        email:req.body.email,
        password:req.body.password,
        date:Date.now()
      })
      registerData.save().then(() => {
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
  Data.findOne({
    email:req.body.email,
    password:req.body.password
  },(err,data) =>{
    if(data){
    res.send("Logged in");
    }
    if(!data){
      res.send("Failed")
    }
  })
})

app.get('/', function (req, res) {
  res.send("Hello World")
});

app.listen(8080);