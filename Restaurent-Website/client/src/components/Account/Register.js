import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import './Account.css'

const Register = (props) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
      const res = await fetch('https://restaurent-website-2.onrender.com/api/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user) 
      });

      console.log(res);

      if(res.ok){
        alert("Registered successfully")
        props.onformSwitch("Login")
      }else{
        alert("Error in Registration")

      }

    } catch (error) {
      console.log("register error");
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <span>Register now and enjoy our tasty dishes</span>
      <form
        id="form"
        className="flex flex-col"
        onSubmit={handleSubmit} 
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="mobile number"
          onChange={handleChange}
        />
        <input
          type="password" 
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button className="btn">
          Register <FiArrowRight />
        </button>
      </form>
      <div className="register-account">
        Already have an account?{" "}
        <button
          className="register-btn"
          onClick={() => props.onformSwitch("Login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
