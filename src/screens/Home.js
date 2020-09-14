import React from "react";
import {
  LoginFormContainer,
  MenuContainer,
} from "../components";

export const HomeScreen = () => (
  <>
  <div id="container" style={{backgroundImage: "url('https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VC_BestPiers_Module_Hero_SantaMonica_Stock_RF_EHNWY3_1280x640.jpg')", backgroundSize: "cover", position: "fixed", minHeight: "100%", minWidth: "100%", backgroundPosition: "center"}}>
    <MenuContainer />
   
    <LoginFormContainer />
   
    
      
    
    
  </div>
  </>
);
