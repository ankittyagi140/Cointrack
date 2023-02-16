import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { LogIn, SignUp } from "../../components";
import "./form.scss";

const Form = () => {
  const formState = useSelector((state) => {
    return state.authentication;
  });

  return (
    <>
      <div className="form_container">
        {formState === "signup" ? (
          <div className="form_content">
            <h1>SignUp to Cryptotrack</h1>
            <SignUp />
          </div>
        ) : (
          <div className="form_content">
            <h1>LogIn to Cryptotrack</h1>
            <LogIn />
          </div>
        )}
      </div>
    </>
  );
};
export default Form;
