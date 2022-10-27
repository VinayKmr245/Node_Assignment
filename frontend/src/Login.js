import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  // const generateError = (error) =>
  //   toast.error(error, {
  //     position: "bottom-right",
  //   });
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/authenticate/login",values,{ headers: {
      'Content-Type' : 'application/json; charset=UTF-8',
      'Accept': 'Token',
      "Access-Control-Allow-Origin": "*",
  }})
    .then((data)=>{
      console.log(data.data)
    })
    .catch((err)=>{
      // generateError(err);
      console.log(err)
    })
    e.target.reset();
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
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
          Don't have an account ?<Link to="/register"> Register </Link>
        </span>
      </form>
      <ToastContainer />
      
    </div>
  );
}

export default Login;

 // const [cookies] = useCookies([]);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (cookies.jwt) {
  //     navigate("/");
  //   }
  // }, [cookies, navigate]);