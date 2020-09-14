import React from "react";
import {
  LoginFormContainer,
  MenuContainer,
} from "../components";

export const HomeScreen = () => (
  <>
  <div id="container" style={{backgroundImage: "url('https://kwit.app/images/kwit-logo.jpg')", backgroundSize: "cover", position: "fixed", minHeight: "100%", minWidth: "100%", backgroundPosition: "center"}}>
    <MenuContainer />
   
    <LoginFormContainer />
   
    
      
    
    
  </div>
  </>
);
