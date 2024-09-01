import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import './Account.css';

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const res = await fetch('https://restaurent-website-2.onrender.com/api/auth/login', {
        method: "POST", // Change GET to POST
        headers: {
          "Content-Type": "application/json" // Add Content-Type header
        },
        body: JSON.stringify(user) // Correctly set the body
      });

      console.log(res);

      if(res.ok){
        alert("Logged In successfully");
        props.onformSwitch("Register");
      } else {
        alert("Error in Login");
      }

    } catch (error) {
      console.log("Login error", error);
    }
  };

  return (
    <div className="register">
      <h2>Login</h2>
      <span>Login now and enjoy our tasty dishes</span>
      <form
        id="form"
        className="flex flex-col"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password" // Change input type to password
          name="password"
          placeholder="password"
          onChange={handleChange}
        />

        <button className="btn">
          Login <FiArrowRight />
        </button>
      </form>
      <div className="register-account">
        Don't have an account?
        <button
          className="register-btn"
          onClick={() => props.onformSwitch("Register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
