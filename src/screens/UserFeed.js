import React from "react";
import { MenuContainer } from "../components";
// import CreateMessages from "../components/create-messages/CreateMessages";

// import { GetMessageList } from "../components";
import UserList from "../components/user-list/UserList";

export const UserFeed = () => (
  <>
    <MenuContainer />

    <h2>Friends List</h2>
    <UserList />
    {/* <h2>Message Feed</h2>
    <CreateMessages />
    <br />
    <br />
    <GetMessageList /> */}
  </>
);
