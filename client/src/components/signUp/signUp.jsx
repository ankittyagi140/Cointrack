import React, { useState } from "react";
import Button from "../button/button";
import "./signUp.scss";

const SignUp = () => {
  return (
    <>
      <div className="signUp_form">
        <form>
          <div className="signUp_name_field">
            <label htmlFor="signUp_name">Email Address</label>
            <input
              name="signUp_name"
              type="text"
              placeholder="Enter Your Email Address"
              aria-label="Enter Your Email Address"
              id="signUp_name"
            />
          </div>
          <div className="signUp_password_field">
            <label htmlFor="signUp_password">Password</label>
            <input
              name="signUp_password"
              type="password"
              placeholder="Enter Your Password"
              aria-label="Enter Your Password"
              id="signUp_password"
            />
          </div>
        </form>
        <Button className="form_button" onClick={() => console.log("signup")}>
          Sign Up
        </Button>
      </div>
    </>
  );
};
export default SignUp;
