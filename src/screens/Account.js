import React from "react";
import { MenuContainer } from "../components";
import { DeleteUser } from "../components/delete-user/DeleteUser";

export const Account = () => (
  <>
  <div id="color" style={{backgroundColor: "#EFFEE5"}}>
    <MenuContainer />
    <h2 style={{fontFamily: "Fredoka One", position: "relative", left: "38%", margin: "20px"}}>Account Information</h2>
    <DeleteUser />
    </div>
  </>
);
