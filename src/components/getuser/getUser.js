import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getuser } from "../../redux/actions/getusers";
import { Loader } from "../loader";
import { Card, Button } from "react-bootstrap";

// import "./GetUser";

export const GetUser = () => {
  const { loading, error, userinfo, username } = useSelector((state) => ({
    loading: state.users.loading,
    error: state.users.error,
    userinfo: state.users.user,
    username: state.auth.username,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getuser(username));
  }, []);
  console.log(userinfo);
  console.log(userinfo.displayName);
  console.log(userinfo.updatedAt);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://frodsham.gov.uk/wp-content/uploads/2019/05/profile-photo-placeholder.jpg"
        />
        <Card.Body>
          <Card.Title>{userinfo.username}</Card.Title>
          <Card.Text>Updated At: {userinfo.updatedAt}</Card.Text>
          <Card.Text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
};
