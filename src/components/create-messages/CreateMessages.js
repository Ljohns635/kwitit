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
    //made changes
    <React.Fragment>
      <Form
        style={{
          width: "61%",
          float: "right",
          padding: "1%",
          position: "absolute",
          top: "55%",
          right: "8%",
          fontFamily: "Fredoka One",
        }}
      >
        <Form.Group controlId="message-box">
          <Form.Label>
            <Badge style={{ backgroundColor: "#A5FA70" }}>Send Kwit</Badge>{" "}
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            as="textarea"
            rows="3"
            name="text"
            value={message.text}
          />
        </Form.Group>
        <Button
          style={{ backgroundColor: "#A5FA70", color: "white" }}
          size="lg"
          block
          onClick={handleSend}
        >
          Send Kwit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default CreateMessages;
