import React from "react";
import {
  LoginFormContainer,
  MenuContainer,
  RegisterContainer,
} from "../components";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    <br />
    <hr />
    <br />
    <RegisterContainer />
  </>
);
