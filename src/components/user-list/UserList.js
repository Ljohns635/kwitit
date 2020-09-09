import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { userlist } from "../../redux/actions";
import { deleteuser } from "../../redux/actions/deleteusers";

export default function UserList() {
  const userListState = useSelector((state) => ({
    userList: state.users.userList,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hello");
    dispatch(userlist());
  }, []);

  const handleDelete = (username) => {
    dispatch(deleteuser(username));
  };

  console.log(userListState);
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        {userListState.userList &&
          userListState.userList.map((user) => (
            <ListGroup.Item as="li" action>
              {user.username}
              <br />
              {console.log(user)}
              created at:{user.createdAt}
              <button
                onClick={(evt) => {
                  handleDelete(user.username);
                }}
              >
                Delete user
              </button>
            </ListGroup.Item>
          ))}
      </ListGroup.Item>
    </ListGroup>
  );
}
