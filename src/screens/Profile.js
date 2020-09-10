import React from "react";
import { MenuContainer } from "../components";
// import UserList from "../components/user-list/UserList";
import { GetMessageList } from "../components";
import CreateMessages from "../components/create-messages/CreateMessages";
import { GetUser } from "../components/getuser/getUser";
export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>
    <GetUser />
    <br />
    <br />
    <CreateMessages />
    <br />
    <br />
    <GetMessageList />
    {/* <h3>User List</h3> */}
  </>
);
