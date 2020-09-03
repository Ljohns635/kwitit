import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/createMessages";
import { Loader } from "../loader";
import "./CreateMessages.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateMessages = () => {
  //  const { loading, error } = useSelector((state) => ({
  //   loading: state.auth.loading,
  //   error: state.auth.error,
  // }));

  // const dispatch = useDispatch();

  const [message, setMessage] = useState({
    text: "",
  });
  // const handleChange = (event) => {
  //   const inputName = event.target.name;
  //   const inputValue = event.target.value;
  //   setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  // };

  // const handleSubmit = (event) => {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

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
            as="textarea"
            rows="3"
            name="name"
            // onChange={this.handleInputChange}
          />
        </Form.Group>
        <Button variant="secondary" size="lg" block>
          Send Message
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default CreateMessages;
