import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessageList } from "../../redux/actions/messageList";
import { Loader } from "../loader";
import "./GetMessagesList";

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

  return (
    <>
      <h1>Messagelist</h1>
      {messages &&
        messages.map((message) => <p key={message.id}>{message.text}</p>)}
    </>
  );
};
