const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const jwt = require("jsonwebtoken")
const  {authrouter } = require("./register");
const authenticate = require('./authenticate.js')
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

app.get("/get",authenticate,async (req,res)=>{
    console.log("i am");
    const client= new MongoClient(url);
    const db = client.db('companyProfile');
    const users = db.collection('userProfile');
    const reader = await users.find({});
    var array = []
    await reader.forEach((data)=>{
        array.push(data);
    });
    res.json(array);
})

app.get("/secretRoute",authenticate,(req,res)=>{
    res.status(200).json({message:'one true user'});
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