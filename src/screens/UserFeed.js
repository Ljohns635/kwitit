import React from "react";
import { MenuContainer } from "../components";

import UserList from "../components/user-list/UserList";

export const UserFeed = () => (
  <>
  <div id="box" style={{backgroundColor: "#EFFEE5", height: "825vh"}}>
    <MenuContainer />

    <h2 style={{fontFamily: "Fredoka One"}}>User List</h2>
    <UserList />
    {/* <h2>Message Feed</h2>
    <CreateMessages />
    <br />
    <br />
    <GetMessageList /> */}
    </div>
  </>
);
