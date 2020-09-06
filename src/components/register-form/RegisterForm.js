import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/register";
import { Loader } from "../loader";
import "./RegisterForm.css";
import { Link } from "react-router-dom";

export const RegisterForm = ({ register }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleRegister = (event) => {
    event.preventDefault();
    dispatch(actions.register(state));
    console.log(state);
  };

  const handleChange = (event) => {
    console.log(event);
    const inputName = event.target.name;
    const inputValue = event.target.value;
    // const displayName = event.target.name;
    setState((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  return (
    <React.Fragment>
      <form id="register-form" onSubmit={handleRegister}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={state.displayName}
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
        <button type="submit" disabled={loading}>
          Register
        </button>
        <Link to="/">Home</Link>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};
