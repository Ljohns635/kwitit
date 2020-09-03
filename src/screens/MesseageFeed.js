import React from "react";
import { MenuContainer } from "../components";
import CreateMessages from "../components/create-messages/CreateMessages";
import { Link } from "react-router-dom";

export const MessageFeed = () => (
  <>
    <MenuContainer />
    <Link to="/">Go Home</Link>
    <h2>Message Feed</h2>
    <CreateMessages />
  </>
);
