//require the library
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

//connect to the database
mongoose.connect("mongodb://0.0.0.0:27017/hardikDB");

//acquire the connection(to check if it's successful)
const db= mongoose.connection;

//error
db.on("error", console.error.bind(console,"Error in connection to Mongodb"));

//up and running then print the message
db.once("open", function(){
    console.log("Successfully connected to Database :: MongoDB");

    
});

module.exports =db;