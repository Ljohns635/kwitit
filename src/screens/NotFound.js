import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => (
  <>
  <div style={{marginLeft:'50px'}}>        

                <h1>Oops! That page can’t be found.</h1>
                <img src="https://media.tenor.com/images/1d6bfcd2425d28de25e778171c305886/tenor.gif" style={{height: '230px'}} />

    <p>Page not found</p>
    <Link to="/">Go Home</Link>
    </div>
  </>
);

export const NotFoundScreen = NotFound;
