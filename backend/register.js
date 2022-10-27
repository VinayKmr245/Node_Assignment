const { application } = require('express');
const express = require('express');
const authrouter = express.Router();
const jwt = require("jsonwebtoken")
const {MongoClient}=require('mongodb');
const { default: authenticate } = require('./authenticate');
const url = "mongodb+srv://project:nodejs@cluster0.9gqqmkx.mongodb.net/?retryWrites=true&w=majority";
require('dotenv').config()

const check =require('./authenticate');
const app=express()

app.use("/",check);

authrouter.post('/login', async (req, res) => {
    console.log(req.body)

    const client= new MongoClient(url);
    const db = client.db('companyProfile');
    const userProfile = db.collection('userProfile');
    const user={
        email: req.body.email,
        password: req.body.password
    }
    const token=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)

    console.log(user.email,user.password);
    try{
        const userDetails = await userProfile.findOne({email:req.body.email,password:req.body.password})
        if(userDetails)
        {
            console.log("User Found..!")
            res.send("Success");
        }
    }
    catch(err){
        res.send("User Doesn't Exist")
    }
});

authrouter.post('/register', (req, res) => {
    const client= new MongoClient(url);
    const db = client.db('companyProfile');
    const userProfile = db.collection('userProfile');
    console.log(req.body)
     
    try{
        if(userProfile.findOne({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,password:req.body.password}))
        {
            console.log("Authentication Done");
            res.send("User Already exists..!");
        }
        else{
            const new_user={
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            }
        userProfile.insertOne(new_user);
        res.send('User added');
        }
    }
    catch(err){
        console.log(err);
    }
});

module.exports = {authrouter};