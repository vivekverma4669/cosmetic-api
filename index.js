const express= require("express");
const app= express();
const connection = require('./configs/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();





app.get('/', (req,res)=>{
   res.send("iam server for makeup api")
});



app.listen(3000  ,  async () => {
    console.log(`app running at port 3000`);
})