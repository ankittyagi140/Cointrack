import React from "react";
import "./logIn.scss";
import Button from "../button/button";

const LogIn = () => {
  return (
    <>
      <div className="logIn_form">
        <form>
          <div className="logIn_name_field">
            <label htmlFor="logIn_name">Email Address</label>
            <input
              name="logIn_name"
              type="text"
              placeholder="Enter Your Email Address"
              aria-label="Enter Your Email Address"
              id="logIn_name"
            />
          </div>
          <div className="logIn_password_field">
            <label htmlFor="logIn_password">Password</label>
            <input
              name="logIn_password"
              type="password"
              placeholder="Enter Your Password"
              aria-label="Enter Your Password"
              id="logIn_password"
            />
          </div>
        </form>

        <Button className="form_button" onClick={() => console.log("logIn")}>
          Log In
        </Button>
      </div>
    </>
  );
};
export default LogIn;
