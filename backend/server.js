const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
})

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET','POST'],
    credentials: true
}));
app.post('/login', (req, res) => {
    const client= new MongoClient(url);
    const Database= client.db('test');
    const collection= Database.collection('users');
    const new_user={
        email: req.body.email,
        password: req.body.password
    }
    try{
        collection.insertOne(new_user);
        res.send('User Valid');
    }catch(err){
        res.send(<h1>Error..!</h1>)
    }
});
app.post('/register', (req, res) => {
    const client= new MongoClient(url);
    const Database= client.db('test');
    const collection= Database.collection('users');
    const new_user={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    }
    try{
        collection.insertOne(new_user);
        res.send('User added');
    }
    catch(err){
        res.send(<h1>Error..!</h1>)
    }
});
app.use(express.json());
app.use(cookieParser());
app.listen(5000,()=>{
    console.log('Server started on port 5000');
})
//use mongodb driver connection

    
