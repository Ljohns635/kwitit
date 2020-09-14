import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { logingoogle } from "../../redux/actions/googleAuth";
import { Button } from "react-bootstrap"


export const LoginForm = ({ login }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    console.log(event);
    event.preventDefault();
    dispatch(actions.login(state));
  };

  const handleGoogleLogin = () => {
    const googleLoginWindow = window.open(
      "https://kwitter-api.herokuapp.com/auth/google/login",
      "_blank"
    );
    googleLoginWindow.window.opener.onmessage = (evt) => {
      googleLoginWindow.close();
      if (!evt || !evt.data || !evt.data.token) {
        return;
      }
      dispatch(logingoogle(evt.data));
    };
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleLogin} style={{position: "absolute", right: "40%", bottom: "40%", border: "2px solid white", padding: "4%", backgroundColor: "#A5FA70", boxShadow: "5px 10px rgb(255,255,255, 0.6)"}}>
        <h3 style={{fontFamily: "Fredoka One", color:"white", position: "relative", left: "25%"}}>Sign in</h3>
        <label htmlFor="username"></label>
      <div id="container">
        <input
          type="text"
          name="username"
          placeholder="Usename"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}          
        />        
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          required
          onChange={handleChange}
        />
      </div>
        <br />
      <Button variant="light" type="submit" disabled={loading} >Login</Button>
        {/* <button type="submit" disabled={loading}>
          Login
        </button> */}
        <br />
        <Button variant="light" type="submit" disabled={loading} onClick={handleGoogleLogin} >Google Login</Button>
        {/* <button onClick={handleGoogleLogin}>Google Login</button> */}
        <Link to="/register">Register</Link>
      </form>
      <div id="loader" style={{position:"absolute", right: "43%", top: "63%"}}>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    </React.Fragment>
  );
};
