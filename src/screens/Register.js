import React from "react";
import { MenuContainer, RegisterContainer } from "../components";
import { Link } from "react-router-dom";
import { GoogleAuth } from "../components/google-auth/GoogleAuth";

export const RegisterScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <RegisterContainer />
    <GoogleAuth />
    <div>
      <Link to="/">Home</Link>
    </div>
  </>
);
