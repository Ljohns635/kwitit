import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createMessage } from "../../redux/actions/createMessages";
import "./CreateMessages.css";
import Form from "react-bootstrap/Form";
import { Button, Badge } from "react-bootstrap";

const CreateMessages = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("text");
  // console.log(message);
  const handleChange = (event) => {
    // console.log(event.target.value);
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setMessage((prevMessage) => ({ ...prevMessage, [inputName]: inputValue }));
    // setMessage(inputValue);
  };

  //recieved help from Marcel Cornett
  const handleSend = (event) => {
    // console.log(event);

    event.preventDefault();
    dispatch(createMessage(message));

    setMessage({ text: "" });
  };
  // console.log(message);
  return (
    <React.Fragment>
      <Form
        style={{
          width: "77%",
          float: "right",
          top: "80px",
          padding: "30px",
          position: "absolute",
          top: "460px",
          right: "50px",
          fontFamily: "Fredoka One",
        }}
      >
        <Form.Group controlId="message-box">
          <Form.Label>
            <Badge pill variant="secondary">
              Send Kwit
            </Badge>{" "}

          </Form.Label>
          <Form.Control
            onChange={handleChange}
            as="textarea"
            rows="3"
            name="text"
            value={message.text}
          />
        </Form.Group>
        <Button variant="secondary" size="lg" block onClick={handleSend}>
          Send Kwit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default CreateMessages;
