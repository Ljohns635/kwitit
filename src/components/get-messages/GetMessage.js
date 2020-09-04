import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessage } from "../../redux/actions/getmessages";
import { Loader } from "../loader";
import "./GetMessage.css";

export const GetMessage = () => {
  // const { loading, error, messages } = useSelector((state) => ({
  //   loading: state.auth.loading,
  //   error: state.auth.error,
  //   messages: state.messages.list,
  // }));

  const dispatch = useDispatch();

  const [messages, setMessage] = useState("messagesId");
  useEffect(() => {
    dispatch(getMessage());
  });

  return (
    <>
      {messages &&
        messages.map((message) => <p key={message.id}>{message.text}</p>)}
    </>
  );
};
