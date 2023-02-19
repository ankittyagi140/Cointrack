import React, { useState, useEffect } from "react";
import "./logIn.scss";
import Button from "../button/button";
import { formValidation } from "../../utils/formValidation";

const LogIn = () => {
  return <div>login</div>;
  // const [formErrors, setFormErrors] = useState({});
  // const [logInFormValue, setLogInFormValue] = useState({
  //   name: "",
  //   password: "",
  // });
  // const [isSubmit, setIsSubmit] = useState(false);

  // const validationFields = (e) => {
  //   const { name, value } = e.target;
  //   setLogInFormValue({ ...logInFormValue, [name]: value });
  //   setFormErrors(formValidation.asyncformValidation(logInFormValue));
  // };

  // const logInFormSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmit(true);
  // };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit === true) {
  //     console.log(logInFormValue);
  //   }
  // }, [formErrors]);

  // return (
  //   <>
  //     <div className="logIn_form">
  //       <form>
  //         <div className="logIn_name_field">
  //           <label htmlFor="logIn_name">Email Address</label>
  //           <input
  //             name="name"
  //             type="text"
  //             placeholder="Enter Your Email Address"
  //             aria-label="Enter Your Email Address"
  //             id="logIn_name"
  //             value={logInFormValue.name}
  //             onChange={validationFields}
  //           />
  //         </div>
  //         <span className="form_error">{formErrors.name}</span>
  //         <div className="logIn_password_field">
  //           <label htmlFor="logIn_password">Password</label>
  //           <input
  //             name="password"
  //             type="password"
  //             placeholder="Enter Your Password"
  //             aria-label="Enter Your Password"
  //             id="logIn_password"
  //             value={logInFormValue.password}
  //             onChange={validationFields}
  //           />
  //         </div>
  //         <span className="form_error">{formErrors.password}</span>
  //       </form>

  //       <Button className="form_button" onClick={logInFormSubmit}>
  //         Log In
  //       </Button>
  //     </div>
  //   </>
  // );
};
export default LogIn;
