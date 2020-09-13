import React from "react";
import Spinner from "react-bootstrap/Spinner";

/*
https://lmgtfy.com/?q=react+loading+spinner+components
There are many more on the web use one of these or create your own!
*/

export const Loader = () => (
  <>
 
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="secondary" />
    <Spinner animation="grow" variant="success" />
    <Spinner animation="grow" variant="danger" />
    <Spinner animation="grow" variant="warning" />
    <Spinner animation="grow" variant="info" />
    <Spinner animation="grow" variant="light" />
   
  </>
);
