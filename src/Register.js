//import { Cancel, Room } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import Navbar from './Navbar';
import { NavLink } from "react-router-dom";
export default function Register({ setShowRegister }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await axios.post("http://localhost:8080/api/business/register", newUser);
      setError(false);
      setSuccess(true);
      window.location.replace("http://localhost:3000/business/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <><Navbar />
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder="username" ref={usernameRef} />
        <input type="email" placeholder="email" ref={emailRef} />
        <input
          type="password"
          min="6"
          placeholder="password"
          ref={passwordRef}
        />
        <button className="registerBtn" type="submit">
          Register
        </button>
        {success && (
          <span className="success">Successfull. You can login now!</span>
        )}
        {error && <span className="failure">Something went wrong!</span>}
      </form>
      <p className="topform123">
                  Already have an Account?{" "}
                  <NavLink  to="/business/login">Login</NavLink>{" "}
                </p>
            
      {/* <Cancel
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      /> */}
    </div>
    </>
  );
}