const { dbconfiguration} = require("./dbconfig");

const {createServer} = require("node:http"); 
const {userDatamodel}  = require("./model/userdatamodel");
const express = require("express")
require('dotenv').config();
// const jwt = require('jsonwebtoken');
 const bodyparser = require("body-parser");
const cors = require("cors");
const { error } = require("node:console");
// const {DBconnection} =  require("./dbconfig");
// const { log } = require("node:console");
const server = express();
server.use(bodyparser.json());
server.use(cors()); 

dbconfiguration();


server.get('/getuserdetails', (req, res) => {
    res.send('hello this is user details!');
  });

  server.post('/senduserdetails', (req, res) => {
   
   console.clear();

    try{
        const userdata =  new userDatamodel(req.body);
        if(userdata){
        userdata.save();
        res.status(200).send({message : "user details saved successfully"})
        }
        else{
     res.status(500).send({error : "something went wrong user details not registered"});
        }

    }
    catch(err){

        console.log(`${err} error logged here`);
    }



  });
  



  server.listen(process.env.PORT, process.env.HOSTNAME, () => {
    console.log('Listening on 127.0.0.1:3000');
  });
