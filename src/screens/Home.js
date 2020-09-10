import React from "react";
import {
  LoginFormContainer,
  MenuContainer,
  // RegisterContainer,
} from "../components";
import { GoogleAuth } from "../components/google-auth/GoogleAuth";
import { Link } from "react-router-dom";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    <GoogleAuth />
    <div>
      <Link to="/register">Register</Link>
    </div>
    {/* <br />
    <hr />
    <br />
    <RegisterContainer /> */}
  </>
);
