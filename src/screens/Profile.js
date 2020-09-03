import React from "react";
import { MenuContainer } from "../components";
import CreateMessages from "../components/create-messages/CreateMessages";
import MessageList from "../components/message-list/MessageList";

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>
    <CreateMessages />
    <br />
    <br />
    <MessageList />
  </>
);
