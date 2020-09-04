import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createMessage } from "../../redux/actions/createMessages";
import "./CreateMessages.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateMessages = () => {
  // const { loading, error, messages } = useSelector((state) => ({
  //   loading: state.messages.loading,
  //   error: state.messages.error,
  //   messages: state.messages.list,
  // }));
  const dispatch = useDispatch();

  const [message, setMessage] = useState("text");
  // console.log(message);
  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setMessage((prevMessage) => ({ ...prevMessage, [inputName]: inputValue }));
  };

  //recieved help from Marcel Cornett
  const handleSend = (event) => {
    // console.log(event);
    event.preventDefault();
    dispatch(createMessage(message));
  };

  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId="message-box">
          <Form.Label>Send Message</Form.Label>
          <Form.Control
            onChange={handleChange}
            as="textarea"
            rows="3"
            name="text"
          />
        </Form.Group>
        <Button variant="secondary" size="lg" block onClick={handleSend}>
          Send Message
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default CreateMessages;
