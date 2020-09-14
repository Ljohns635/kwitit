import React from "react";
import { MenuContainer, RegisterContainer } from "../components";
import { Link } from "react-router-dom";
import "./register.css";

export const RegisterScreen = () => (
<>
<div id="border" style={{backgroundImage: "url(https://kwit.app/images/kwit-logo.jpg)", backgroundSize: "cover", position: "fixed", minHeight: "100%", minWidth: "100%", backgroundPosition: "center" }}>
  <MenuContainer />
  
  <div className="registername">
     <RegisterContainer />
     <Link to="/">Home</Link>
  </div>
</div>
</>

)

