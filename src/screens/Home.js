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
  <div id="container" style={{backgroundImage: "url('http://www.estavoyage.com/wp-content/uploads/2017/08/circuit-californie.jpg')", backgroundSize: "cover", height: "640px"}}>
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
  </div>
  </>
);
