import React from "react";
import { MenuContainer } from "../components";

import UserList from "../components/user-list/UserList";

export const UserFeed = () => (
  <>
    <MenuContainer />

    <h2 style={{fontFamily: "Fredoka One"}}>User List</h2>
    <UserList />
    {/* <h2>Message Feed</h2>
    <CreateMessages />
    <br />
    <br />
    <GetMessageList /> */}
  </>
);
