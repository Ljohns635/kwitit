import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Menu.css";
import { MessageFeed } from "../../screens";

export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  return (
    <div id="menu">
      <h1>KwitIt!</h1>

      <div id="menu-links">
        {isAuthenticated ? (
          <>
            <Link to="/messagefeed" onClick={MessageFeed}>
              Message Feed
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
