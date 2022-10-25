const router=require("./routes")
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.listen(5000,()=>{
    console.log('Server started on port 5000');
})
//use mongodb driver connection
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
app.use(express.json());
app.use(cookieParser());
app.use("/",router);