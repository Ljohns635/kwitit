import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";
import "./LoginForm.css";

import { logingoogle } from "../../redux/actions/googleAuth";
import GoogleLogin from "react-google-login";


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
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
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
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          required
          onChange={handleChange}
        />
      </div>
        <button type="submit" disabled={loading}>
          Login
        </button>
        <button onClick={handleGoogleLogin}>Google Login</button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      
    </React.Fragment>
  );
};
