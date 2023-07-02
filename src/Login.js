//import { Cancel, Room } from "@material-ui/icons";
import axios from "axios";
import React from "react";
import { useRef, useState } from "react";
//import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Ownerform from "./Ownerform";

export default function Login() {
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const myStorage = window.localStorage;
  const [currentusername, setCurrentUsername] = useState(myStorage.getItem("user"));
  const [showlogin, setShowLogin] = useState(false);
  React.useEffect(()=>{
    if((myStorage.getItem("user")!=null)||(myStorage.getItem("user")!=undefined))
    {
      setShowLogin(true);
    }
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const res = await axios.post("http://localhost:8080/api/business/login", user);
      setCurrentUsername(res.data.username);
      myStorage.setItem('user', res.data.username);
      setShowLogin(true);
      window.location.reload();
    } catch (err) {
      setError(true);
    }
  };
  function logout()
  {
    myStorage.removeItem('user');
    setCurrentUsername(null);
    setShowLogin(false);
  }
  return (
    <>
    {(showlogin)?<><Ownerform name={currentusername} logout={logout} /></>:
    <>
    <Navbar />
    <div className="loginContainer">
      <div className="emessage">
      <h2>Welcome Back Seller!!</h2>
      <h3>Enter Credentials</h3>
      </div>
      <div className="mains">
      <form onSubmit={handleSubmit}>
        <label className="login-label">Username</label><br />
        <input className="login-input" autoFocus placeholder="username" ref={usernameRef} /><br/>
        <label className="login-label">Password</label><br />
        <input
          className="login-input"
          type="password"
          min="6"
          placeholder="password"
          ref={passwordRef}
        /><br/>
        <button className="loginBtn" type="submit">
          Login
        </button>
        {error && <span className="failure">Something went wrong!</span>}

      </form>
      <p className="topform123">
                  Don't have an Account?{" "}
                  <NavLink  to="/business/register">SignUp</NavLink>{" "}
      </p>
      </div>
      {/* <Cancel className="loginCancel" onClick={() => setShowLogin(false)} /> */}
    </div></>}
    </>
  );
}