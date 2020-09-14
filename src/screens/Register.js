import React from "react";
import { MenuContainer, RegisterContainer } from "../components";
import { Link } from "react-router-dom";
import "./register.css";

export const RegisterScreen = () => (
<>
<div id="border" style={{backgroundImage: "url(https://www.psdgraphics.com/file/2018/bright-light-rays-background.jpg)", backgroundSize: "cover", position: "fixed", minHeight: "100%", minWidth: "100%", backgroundPosition: "center" }}>
  <MenuContainer />
  
  <div className="registername">
     <RegisterContainer />
     <Link to="/">Home</Link>
  </div>
</div>
</>

)

