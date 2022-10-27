const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const jwt = require("jsonwebtoken")
const  {authrouter } = require("./register");
// require('dotenv').config();

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use("/authenticate",authrouter)

const {MongoClient} = require('mongodb');
const url =  "mongodb+srv://project:nodejs@cluster0.9gqqmkx.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
})


app.listen(5000,()=>{
    console.log('Server started on port 5000');
})

//use mongodb driver connection

    
// app.get('/',(req,res)=>{
    //     res.send("<h1>Server Working</h1>")
    // })
    // app.post('/',(req,res)=>{
    //     res.send("<h1>Server Working</h1>")
    // })