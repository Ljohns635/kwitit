import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => (
  <>

                <h1 style={{position: "absolute", top: "20%", left: "33%"}}>Oops! That page can’t be found.</h1>
  <div style={{position: "absolute", top: "30%", left: "30%"}}>        
                <img src="https://media.tenor.com/images/1d6bfcd2425d28de25e778171c305886/tenor.gif" style={{height: '430px'}} />

    
    <h5><Link to="/">Go Home</Link></h5>
    </div>
  </>
);

export const NotFoundScreen = NotFound;
