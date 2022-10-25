import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Style = {
    textDecoration: 'none',
    color: 'white',
}
const Navbar = () => {
    return (
        <div className="Navbar">
            <div><Link style={Style} to="/">User_Portal</Link></div>
            <div className="AppNav">
                <ul className="App-header">
                    <li>
                        <Link style={Style} to="/">Home</Link>
                    </li>
                    <li>
                        <Link style={Style} to="/login">Login</Link>
                    </li>
                    <li>
                        <Link style={Style} to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;