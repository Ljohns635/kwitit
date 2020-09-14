import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
  <div id="box1" style={{backgroundColor: "black", backgroundSize: "cover", position: "fixed", minHeight: "100%", minWidth: "100%", backgroundPosition: "center"}}>
  <h1 style={{position: "absolute", top: "20%", left: "28%", color: "white"}}>Oops! That page can’t be found.</h1>
    <div style={{position: "absolute", top: "30%", left: "25%"}}>        
      <img src="https://media.tenor.com/images/1d6bfcd2425d28de25e778171c305886/tenor.gif" style={{height: '400px'}} />
      <h5><Link to="/"style={{color: "white"}} >Go Home</Link></h5>
    </div>
  </div>
  </>
);

export const NotFoundScreen = NotFound;
