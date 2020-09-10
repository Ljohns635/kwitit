import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { userlist } from "../../redux/actions";
import { deleteuser } from "../../redux/actions/deleteusers";

import Button from "react-bootstrap/Button";

export default function UserList() {
  const userListState = useSelector((state) => ({
    userList: state.users.userList,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("hello");
    dispatch(userlist());
  }, []);

  // console.log(userListState);
  const handleDelete = (username) => {
    dispatch(deleteuser(username));
  };
  return (
    <ListGroup id="userlist">
      <ListGroup.Item as="ul" active>
        {userListState.userList &&
          userListState.userList.map((user) => (
            <ListGroup.Item as="li" action key={user.username}>
              {user.username}
              <br />
              {/* {console.log(user)} */}
              created at:{user.createdAt}
              <Button
                variant="outline-danger"
                onClick={(evt) => {
                  handleDelete(user.username);
                }}
              >
                Delete User
              </Button>{" "}
            </ListGroup.Item>
          ))}
      </ListGroup.Item>
    </ListGroup>
  );
}
