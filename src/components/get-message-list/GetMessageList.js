import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMessageList } from "../../redux/actions/messageList";
import { Loader } from "../loader";
import "./GetMessageList";

import { getMessageList } from "../../redux/actions";
import { Loader } from "../loader";
import "./GetMessageList.css";


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
  });

  // return (
  //   <ReactFragment>
  //     <ul className="list-unstyled">
  //       <Media as="li">
  //         <img
  //           width={64}
  //           height={64}
  //           className="mr-3"
  //           src="holder.js/64x64"
  //           alt="Generic placeholder"
  //         />
  //         <Media.Body>
  //           <h5>List-based media object</h5>
  //           <p>Change to messages</p>
  //         </Media.Body>
  //       </Media>
  //     </ul>
  //   </ReactFragment>
  // );
  return (
    <>
      <h1>Messagelist</h1>
      {messages &&
        messages.map((message) => <p key={message.id}>{message.text}</p>)}
    </>
  );
};
