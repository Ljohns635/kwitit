import React from "react";
import { MenuContainer, RegisterContainer } from "../components";
import { Link } from "react-router-dom";
import "./register.css";



export const RegisterScreen = () => (
<>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>

    <div className="registername">
      <RegisterContainer />
      <Link to="/">Home</Link>
      </div>
      
</>

)

