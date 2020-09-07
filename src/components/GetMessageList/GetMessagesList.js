import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessageList } from "../../redux/actions/messageList";
import "./GetMessagesList";
import { ListGroup } from "react-bootstrap";
import { getMessage } from "../../redux/actions/getmessages";
import { deleteMessages } from "../../redux/actions/deleteMessages";
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
          Message Opened
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
  );
};

export const GetMessageList = () => {
  const { loading, error, messages } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
    messages: state.messages.list,
  }));

  const dispatch = useDispatch();

  const [message, setMessage] = useState({
    messagesId: "",
  });
  useEffect(() => {
    dispatch(getMessageList());
  }, []);

  //Getting a single message
  const handleGetMessage = (messageId) => {
    // console.log(messageId);
    dispatch(getMessage(messageId));
  };
  const [modalShow, setModalShow] = React.useState(false);
  // console.log(messages);

  //Deleting a single messsage
  const handleDelete = (messageId) => {
    dispatch(deleteMessages(messageId));
  };
  return (
    <>
      <h1>Messagelist</h1>
      <ListGroup id="List">
        <ListGroup.Item as="ul">
          {messages &&
            messages.map((message) => (
              <ListGroup.Item as="li" action key={message.id}>
                <strong>{message.username}</strong> <br />
                {/* <p key={message.id} /> */}
                Msg: {message.text}
                <button
                  onClick={(evt) => {
                    handleGetMessage(message.id);
                    setModalShow(true);
                  }}
                >
                  Open Message
                </button>
                <button
                  onClick={(evt) => {
                    handleDelete(message.id);
                  }}
                >
                  Delete Message
                </button>
              </ListGroup.Item>
            ))}
        </ListGroup.Item>
      </ListGroup>
      <MyVerticallyCenteredModal
        show={modalShow}
        user={messages.username}
        time={messages.createdAt}
        text={messages.text}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
