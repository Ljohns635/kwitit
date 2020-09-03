import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/createMessages";
import { Loader } from "../loader";
import "./MessageList.css";
import Media from "react-bootstrap/Media";

const MessageList = () => {
  //  const { loading, error } = useSelector((state) => ({
  //   loading: state.auth.loading,
  //   error: state.auth.error,
  // }));

  // const dispatch = useDispatch();

  const [messageList, setMessageList] = useState("messages?limit=100&offset=0");
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
      <Media>
        <img
          width={64}
          height={64}
          className="align-self-start mr-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>

      <Media>
        <img
          width={64}
          height={64}
          className="align-self-center mr-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>

      <Media>
        <img
          width={64}
          height={64}
          className="align-self-end mr-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <p className="mb-0">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>
    </React.Fragment>
  );
};

export default MessageList;
