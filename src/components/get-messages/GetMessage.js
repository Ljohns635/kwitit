import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessage } from "../../redux/actions/getmessages";
import { Loader } from "../loader";
import "./GetMessage.css";

export const GetMessage = ({ messageId }) => {
  // const { loading, error, messages } = useSelector((state) => ({
  //   loading: state.auth.loading,
  //   error: state.auth.error,
  //   messages: state.messages.list,
  // }));

  const dispatch = useDispatch();

  const [getMessages, setGetMessages] = useState({ messageId });
  useEffect(() => {
    dispatch(getMessage());
  }, [getMessages]);

  return (
    <>
      {getMessages &&
        getMessages.map((message) => <p key={message.id}>{message.text}</p>)}
    </>
  );
};
