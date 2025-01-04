const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopolofy: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log("DB connected")).catch((err)=>console.log(err));

//port
const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Server running on Port: ${port}`);
});
