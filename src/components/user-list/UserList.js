import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { userlist } from "../../redux/actions";
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

  return (
    <ListGroup id="userlist" style={{width:"77%", position: "absolute", right: "11%"}}>
      <ListGroup.Item as="ul" active>
        {userListState.userList &&
          userListState.userList.map((user) => (
            <ListGroup.Item as="li" action key={user.username}>
              {user.username}
              <br />
              {/* {console.log(user)} */}
              created at:{user.createdAt}
            </ListGroup.Item>
          ))}
      </ListGroup.Item>
    </ListGroup>
  );
}
