import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMessage } from "../../redux/actions/createMessages";
import { Loader } from "../loader";
import "./CreateMessages.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateMessages = () => {
  // const { loading, error } = useSelector((state) => ({
  //   loading: state.auth.loading,
  //   error: state.auth.error,
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
      {/* <form id="message-box">
        <textarea />
        <button>Send</button>
      </form> */}
      <Form>
        <Form.Group controlId="message-box">
          <Form.Label>Send Message</Form.Label>
          <Form.Control
            onChange={handleChange}
            as="textarea"
            rows="3"
            name="text"
            // onChange={this.handleInputChange}
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
