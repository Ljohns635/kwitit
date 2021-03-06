import React from "react";
import { MenuContainer } from "../components";
import { GetMessageList } from "../components";
import CreateMessages from "../components/create-messages/CreateMessages";
import { GetUser } from "../components/getuser/getUser";

export const ProfileScreen = () => (
  <>
  <div id="box" style={{backgroundColor: "#EFFEE5", height: "702rem"}}>
    <MenuContainer />
    <h2 style={{ fontFamily: "Fredoka One", position: "relative", left: "48%", margin: "12px"}}>Profile</h2>

    <GetUser />
    <br />
    <br />
    <CreateMessages />
    <br />
    <br />
    <GetMessageList />
    </div>
  </>
);
