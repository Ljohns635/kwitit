import React from "react";
import { MenuContainer, RegisterContainer } from "../components";
import { Link } from "react-router-dom";

export const RegisterScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <RegisterContainer />

    <div>
      <Link to="/">Home</Link>
    </div>
  </>
);
