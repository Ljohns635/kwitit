import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { userlist } from "../../redux/actions";
import { getuser } from "../../redux/actions/getusers";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MyVerticallyCenteredModal = (props) => {
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User Profile Opened
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Recieved: {props.user}</h4>
        <p>Created at: {props.display}</p>
        <p>{props.time}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default function UserList() {
  const userListState = useSelector((state) => ({
    userList: state.users.userList,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hello");
    dispatch(userlist());
  }, []);

  console.log(userListState);

  //Getting a single message
  const handleUser = (username) => {
    // console.log(messageId);
    dispatch(getuser(username));
  };

  const [modalShow, setModalShow] = React.useState(false);
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
                  handleUser(user.username);
                  setModalShow(true);
                }}
              >
                Open User
              </button>
            </ListGroup.Item>
          ))}
        <MyVerticallyCenteredModal
          show={modalShow}
          // user={user.username}
          // display={user.displayName}
          // time={user.createdAt}
          onHide={() => setModalShow(false)}
        />
      </ListGroup.Item>
    </ListGroup>
  );
}
