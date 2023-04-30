const express = require('express');
const port = 8500;
const app = express()
const db = require('./config/mongoose');
const passportJWT = require('./config/passport-jwt-strategy');
app.use(express.urlencoded());
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in connecting the server ${err}`);
    }
    console.log(`Server is running at the port ${port}`);
})