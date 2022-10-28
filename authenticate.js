const jwt = require('jsonwebtoken')

const authenticate= async (req,res,next) =>{
    console.log("iam in authentiacate");
    
    const header=req.headers['authorization'];
    if(header==null){
        res.sendStatus(401)
    }
    else{
        const token = header.split(' ')[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,obj)=>{
            if(err){
                console.log(err)
                res.sendStatus(403);
            }
            else{
                req.usedata = obj;
                next();
            }
        })
    }

}
// export default authenticate;
module.exports=authenticate;

// const express = require('express')
// const jwt = require("jsonwebtoken");
// const router = express.Router();

// // export function authenticateRegister(req,res,next){
// //   pass;
// // }
// // export function authenticateLogin(req,res,next){
// //   const {email , password}=req.body;
 
// // }
// router.post("/login")
// router.post("/register");

// export default router;



// const User = require("./model");
// const jwt = require("jsonwebtoken");

// const maxAge = 3 * 24 * 60 * 60;
// const createToken = (id) => {
//   return jwt.sign({ id }, "Required Authentication", {
//     expiresIn: maxAge,
//   });
// };

// const handleErrors = (err) => {
//   let errors = { email: "", password: "" };

//   console.log(err);
//   if (err.message === "incorrect email") {
//     errors.email = " Email is not registered";
//   }

//   if (err.message === "incorrect password") {
//     errors.password = "Password is incorrect";
//   }

//   if (err.code === 11000) {
//     errors.email = "Email is already registered";
//     return errors;
//   }

//   if (err.message.includes("Users validation failed")) {
//     Object.values(err.errors).forEach(({ properties }) => {
//       errors[properties.path] = properties.message;
//     });
//   }

//   return errors;
// };

// module.exports.register = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.create({ email, password });
//     const token = createToken(user._id);

//     res.cookie("jwt", token, {
//       withCredentials: true,
//       httpOnly: false,
//       maxAge: maxAge * 1000,
//     });

//     res.status(201).json({ user: user._id, created: true });
//   } catch (err) {
//     console.log(err);
//     const errors = handleErrors(err);
//     res.json({ errors, created: false });
//   }
// };

// module.exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.login(email, password);
//     const token = createToken(user._id);
//     res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
//     res.status(200).json({ user: user._id, status: true });
//   } catch (err) {
//     const errors = handleErrors(err);
//     res.json({ errors, status: false });
//   }
// };
// if(req.body.firstName == "" || req.body.lastName == "" ||req.body.email == "" || req.body.password =="")
    // {
    //     res.status(405).send("Error Filling in details");
    // }
    // else if(req.body.password.length<6)
    // {
    //     res.status(405).send("Password is very small");
    // }
    // else{
    // next();
    // }
    
    //Need to check whether token valid or not