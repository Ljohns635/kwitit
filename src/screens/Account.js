import React from "react";
import { MenuContainer } from "../components";
// import CreateMessages from "../components/create-messages/CreateMessages";
import { Link } from "react-router-dom";
// import { GetMessageList } from "../components";
import { DeleteUser } from "../components/delete-user/DeleteUser";

export const Account = () => (
  <>
    <MenuContainer />
    <Link to="/">Go Home</Link>
    <h2>Account Information</h2>
    <DeleteUser />
  </>
);
