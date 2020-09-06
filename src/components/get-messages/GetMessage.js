import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./GetMessage.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// const MyVerticallyCenteredModal = (props) => {
//   console.log(props);
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Message Opened
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Recieved: {props.user}</h4>
//         <p>Created at: {props.time}</p>
//         <p>{props.text}</p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

const GetMessage = () => {
  const getMessageState = useSelector((state) => ({
    getMsg: state.messages.getMsg,
  }));

  const dispatch = useDispatch();

  console.log(getMessageState);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* <MyVerticallyCenteredModal
        show={modalShow}
        // user={message.username}
        // time={message.createdAt}
        // text={message.text}
        onHide={() => setModalShow(false)}
      /> */}
    </>
  );
};

export default GetMessage;
