import React from "react";
import { MenuContainer } from "../components";
import CreateMessages from "../components/create-messages/CreateMessages";

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>
    <CreateMessages />
  </>
);
