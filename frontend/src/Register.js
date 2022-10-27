import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

//function call starts from here
function Register() {
  const [cookies] = useCookies(["cookie-name"]); //usecookies and useNavigate are hooks
  const navigate = useNavigate(); 
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ firstName:"",lastName:"",email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/authenticate/register",values,{ headers: {
      'Content-Type' : 'application/json; charset=UTF-8',
      'Accept': 'Token',
      "Access-Control-Allow-Origin": "*",

  }})
    .then((data)=>{
      console.log(data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
    e.target.reset();
  };
  return (
    <div className="container">
      <h2>Register:</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
      <div>
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            name="firstName"
            placeholder="FirstName"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            name="lastName"
            placeholder="LastName"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account ?<Link to="/login"> Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;

