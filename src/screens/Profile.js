import React from "react";
import { MenuContainer } from "../components";
// import UserList from "../components/user-list/UserList";
import { GetMessageList } from "../components";
import CreateMessages from "../components/create-messages/CreateMessages";
import { GetUser } from "../components/getuser/getUser";

export const ProfileScreen = () => (
  <>
  <div id="box" style={{backgroundColor: "#EFFEE5"}}>
    <MenuContainer />
    <h2 style={{ fontFamily: "Fredoka One", marginLeft: "30px" }}>Profile</h2>

    <GetUser />
    <br />
    <br />
    <CreateMessages />
    <br />
    <br />
    <GetMessageList />
    {/* <h3>User List</h3> */}
    </div>
  </>
);
