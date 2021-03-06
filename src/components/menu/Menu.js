import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Menu.css";
import { UserFeed } from "../../screens";
import { Account } from "../../screens";

import {NotFoundScreen} from "../../screens/NotFound"


import { Form, FormControl, Button } from "react-bootstrap";


export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  return (
    <div id="menu" style={{ fontFamily: "Fredoka One", color: "white" }}>
      <h1>KwitIt!</h1>

      <div id="menu-links">
        {isAuthenticated ? (
          <>
            <Link to="/">Go Home</Link>
            <Link to="/userfeed" onClick={UserFeed}>
              User Feed
            </Link>
            <Link to="/hashtag" onClick={NotFoundScreen}>
              HashTags
            </Link>
            <Link to="/account" onClick={Account}>
              Account
            </Link>
            <Link to="/" onClick={logout}>
              Logout

            </Link>      

            

          </>
        ) : null}
      </div>
    </div>
  );
};
