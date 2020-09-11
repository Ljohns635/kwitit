import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => (
  <>
  <div style={{marginLeft:'50px'}}>        

                <h1>Oops! That page can’t be found.</h1>
                <img src="https://image.freepik.com/free-vector/404-error-sign_23-2147508325.jpg" />
            </div>

    <p>Page not found for this</p>
    <Link to="/">Go Home</Link>
  </>
);

export const NotFoundScreen = NotFound;
