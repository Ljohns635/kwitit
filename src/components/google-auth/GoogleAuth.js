import React from "react";

import { GoogleLogin } from "react-google-login";

export const GoogleAuth = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <>
      <GoogleLogin
        clientId="124824441411-pa38c55a2o9cpon4pkvvl00odv8brtuh.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};
