import React from "react";
import { MenuContainer } from "../components";
import UserList from "../components/user-list/UserList";
import { GetUser } from "../components/getuser/getUser";
export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>
    <GetUser />
    <br />
    <br />
    <h3>User List</h3>
    <UserList />
  </>
);
