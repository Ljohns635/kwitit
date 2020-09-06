import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessageList } from "../../redux/actions/messageList";
import { Loader } from "../loader";
import "./GetMessagesList";
import { ListGroup } from "react-bootstrap";
import { getMessage } from "../../redux/actions/getmessages";

export const GetMessageList = () => {
  const { loading, error, messages } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
    messages: state.messages.list,
  }));

  const dispatch = useDispatch();

  const handleGetMessage = (messageId) => {
    // console.log(messageId);
    dispatch(getMessage(messageId));
  };

  const [message, setMessage] = useState({
    messagesId: "",
  });
  useEffect(() => {
    dispatch(getMessageList());
  }, []);

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
                  }}
                >
                  Open
                </button>
              </ListGroup.Item>
            ))}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
