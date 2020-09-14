import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessageList } from "../../redux/actions/messageList";
import { ListGroup } from "react-bootstrap";
import { getMessage } from "../../redux/actions/getmessages";
import { deleteMessages } from "../../redux/actions/deleteMessages";
import { like } from "../../redux/actions/likes";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const MyVerticallyCenteredModal = (props) => {
  // console.log(props);
  const wrapper = useRef();
  return (
    <div ref={wrapper}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Kwit Opened
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Recieved: {props.user}</h4>
          <p>Created at: {props.time}</p>
          <p>{props.text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const GetMessageList = () => {
  const { messages } = useSelector((state) => ({
    messages: state.messages.list,
  }));

  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(getMessageList());
  }, []);

  //Getting a single message
  const handleGetMessage = (messageId) => {
    console.log(messageId);
    dispatch(getMessage(messageId));
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [modalUsername, setModalUsername] = React.useState("")
  const [modalCreatedAt, setCreatedAt] = React.useState("")
  const [modalText, setText] = React.useState("")
  // console.log(messages);

  //Deleting a single messsage
  const handleDelete = (messageId) => {
    dispatch(deleteMessages(messageId));
  };

  //Like button
  const handleLikes = (messageId) => {
    dispatch(like(messageId));
  };
  return (
    // made changes
    <>
      <ListGroup id="List" style={{width: "66%", float: "right", padding: "4%",position: "absolute", top: "80%", right: "6%", fontFamily: "Fredoka One"}}>
        <ListGroup.Item as="ul">
          {messages &&
            messages.map((message) => (
              <ListGroup.Item as="li" action key={message.id}>
                <strong>{message.username}</strong> <br />
                Sent at: {message.createdAt}
                <p>Kwit: {message.text}</p>
                <Button
                  variant="outline-secondary"
                  style={{float:"right"}}
                  onClick={(evt) => {
                    handleGetMessage(message.id);
                    setModalShow(true);
                    setModalUsername(message.username)
                    setCreatedAt(message.createdAt)
                    setText(message.text)
                  }}
                >
                  Open Kwit
                </Button>{" "}
                <Button
                  variant="outline-danger"
                  style={{float:"right"}}
                  onClick={(evt) => {
                    alert("This Message Will Be PERMENATELY Deleted")
                    handleDelete(message.id);
                  }}
                >
                  Delete Kwit
                </Button>{" "}
                <MyVerticallyCenteredModal
                  show={modalShow}
                  user={modalUsername}
                  time={modalCreatedAt}
                  text={modalText}
                  onHide={() => setModalShow(false)}
                />
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={(evt) => {
                    console.log("like this message");
                    handleLikes(message.id);
                  }}
                >
                  <strong>Like</strong>
                </Button>{" "}
                <span>{message.likes.length}</span>
              </ListGroup.Item>
            ))}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
